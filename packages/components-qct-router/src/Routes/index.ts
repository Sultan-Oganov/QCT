import { setComponent } from '@qctoken/register';
import { Routes } from './Routes';
import { RoutesName } from './types';
import config from './config.json';

setComponent(RoutesName, Routes, config);
