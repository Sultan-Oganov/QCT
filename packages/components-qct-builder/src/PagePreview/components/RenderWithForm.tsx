import { PropsWithChildren } from 'react';
import { useForm, FormContext } from '@qctoken/form';
import { type PageModelInterface, type BuilderConfig } from '@qctoken/register';

type RenderWithFormProps = {
  pageStore: PageModelInterface;
};

const FORM_BC: BuilderConfig = {
  pageObjectId: 'form',
  objectId: 'form',
  type: 'QCT.FORM.FORM',
};

export function RenderWithForm({
  pageStore,
  children,
}: PropsWithChildren<RenderWithFormProps>) {
  const formStore = useForm({ pageStore, visible: true, bc: FORM_BC });
  return (
    <FormContext.Provider value={formStore}>{children}</FormContext.Provider>
  );
}
