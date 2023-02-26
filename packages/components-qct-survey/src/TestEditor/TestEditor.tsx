import { useMemo } from 'react';
import { SurveyCreatorComponent, SurveyCreator } from 'survey-creator-react';
import { ClassProps } from '@qctoken/register';
import { useRunExecutor } from '@qctoken/executor';
import 'survey-creator-core/survey-creator-core.min.css';
import 'survey-core/defaultV2.min.css';
import type { TestEditorNameType } from './types';

const creatorOptions = {
  showLogicTab: false,
  showJSONEditorTab: false,
  isAutoSave: true,
};

const defaultJson = {
  pages: [
    {
      name: 'Имя теста',
      elements: [
        {
          name: 'Имя',
          title: 'Напишите имя:',
          type: 'text',
        },
        {
          name: 'Фамилия',
          title: 'Напишите фамилию:',
          type: 'text',
        },
      ],
    },
  ],
};

export function TestEditor(props: ClassProps<TestEditorNameType>) {
  const { bc, pageStore, values } = props;
  const ID = useRunExecutor(pageStore, bc.courseId, values);
  const creator = useMemo(() => new SurveyCreator(creatorOptions), []);

  useMemo(() => {
    creator.text =
      window.localStorage.getItem(ID) || JSON.stringify(defaultJson);
    creator.saveSurveyFunc = (saveNo: any, callback: any) => {
      window.localStorage.setItem(ID, creator.text);
      callback(saveNo, true);
    };
  }, [creator.text]);

  return <SurveyCreatorComponent creator={creator} />;
}
