import { createElement } from 'react';
import {
  setComponent,
  getComponentByBc,
  mapComponentOne,
  mapComponents,
  getAllComponents,
  makeBC,
} from './components';
import type { BuilderConfig, ClassProps } from './types';

describe('Register/Components', () => {
  const componentName = 'new-component';
  const component = () => null;
  const bc: BuilderConfig = {
    pageObjectId: componentName,
    objectId: componentName,
    type: componentName,
  };
  const props: ClassProps<string> = {
    bc,
    pageStore: {
      translate: () => '',
      invokeHandler: () => Promise.resolve(false),
    },
    visible: true,
  };

  beforeAll(() => {
    setComponent(componentName, component);
  });

  test('Can get by BuilderConfig', () => {
    expect(getComponentByBc(bc)).toBe(component);
  });

  test('Should be empty component for wrong type', () => {
    const bcDatatype: BuilderConfig = {
      ...bc,
      type: `any-${componentName}`,
    };

    expect(getComponentByBc(bcDatatype)).toBe(undefined);
  });

  test('Can map components with custom resolve function', () => {
    expect.assertions(2);

    const cmpInstance = mapComponentOne(bc, (ChildCmp) => {
      expect(ChildCmp).toBe(component);

      return createElement(ChildCmp);
    });

    expect(cmpInstance).toMatchObject({});
  });

  test('Can map component with auto resolve function', () => {
    const cmpInstance = mapComponentOne(bc, props);

    expect(cmpInstance).toMatchObject({});
  });

  test('Can return null for map component', () => {
    const cmpInstance = mapComponentOne({ ...bc, type: 'any' }, props);

    expect(cmpInstance).toBeNull();
  });

  test('Should be render all components', () => {
    const renderedComponents = mapComponents([bc], props);

    expect(renderedComponents).toHaveLength(1);
  });

  test('Should be render null for empty config', () => {
    const renderedComponents = mapComponents(undefined, props);

    expect(renderedComponents).toBeNull();
  });

  test('Should return object of components', () => {
    const allComponents = getAllComponents();

    expect(Object.keys(allComponents).length).toBeGreaterThan(0);
  });

  test('Can create a new BC config by type', () => {
    const defaultAttr = { pageObjectId: '', objectId: '' };
    const bcCreated = makeBC('default', defaultAttr);

    expect(bcCreated).toMatchObject({ ...defaultAttr, type: 'default' });
  });
});
