import { getAllComponents, makeBC } from '@qctoken/register';
import { PageModelRoot } from '@qctoken/page';
import type { ConfigComponent } from '@qctoken/register';
import { useMemo, useState } from 'react';
import { SideMenu } from './components/SideMenu';
import { ViewComponent } from './components/ViewComponent';

const ROOT_PAGE_BC = makeBC('QCT.COMMON.PAGE', {
  pageObjectId: 'root',
  objectId: 'root',
});

export function App() {
  const components = getAllComponents();
  const [selectedType, setSelectedType] = useState(Object.keys(components)[0]);
  const pageStore = useMemo(() => new PageModelRoot(ROOT_PAGE_BC, {}), []);
  const configs = Object.values(components)
    .map((info) => info.config)
    .filter((config): config is ConfigComponent => !!config);

  const info = components[selectedType];

  return (
    <div css={{ display: 'flex', height: '100%' }}>
      <SideMenu
        configs={configs}
        selectedType={selectedType}
        onChangeSelectedType={setSelectedType}
      />
      {info?.config && (
        <ViewComponent
          key={info.config.type}
          pageStore={pageStore}
          Component={info.component}
          config={info.config}
        />
      )}
    </div>
  );
}
