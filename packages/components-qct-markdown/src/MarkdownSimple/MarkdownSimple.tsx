import { type ClassProps } from '@qctoken/register';
import { useRunExecutor } from '@qctoken/executor';
import ReactMarkdown from 'react-markdown';
import type { MarkdownSimpleNameType } from './types';
import remarkGfm from 'remark-gfm';
import { remarkHeadingId } from '../remarks/remarkHeadingId';
import { useEffect } from 'react';

export function MarkdownSimple({
  bc,
  pageStore,
  values,
}: ClassProps<MarkdownSimpleNameType>) {
  const scrollTo = useRunExecutor(pageStore, bc.scrollTo, values);

  if (!bc.content) {
    return null;
  }

  useEffect(() => {
    if (!scrollTo) {
      return undefined;
    }

    document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
  }, [scrollTo]);

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkHeadingId]}
      // eslint-disable-next-line react/no-children-prop
      children={bc.content}
    />
  );
}

export default MarkdownSimple;
