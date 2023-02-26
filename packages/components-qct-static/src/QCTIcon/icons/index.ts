import { ArrowLeft } from './ArrowLeft';
import type { IconNames } from '../types';
import { FunctionComponent, type SVGProps } from 'react';
import { QCT } from './QCT';
import { Search } from './Search';
import { Link } from './Link';
import { Refresh } from './Refresh';
import { Play } from './Play';
import { Study } from './Study';
import { ThreeDCube } from './ThreeDCube';
import { VrGlasses } from './VrGlasses';
import { WalletPassesApp } from './WalletPassesApp';
import { Chat } from './Chat';
import { Market } from './Market';
import { SocialNetwork } from './SocialNetwork';
import { TransactionHistory } from './TransactionHistory';
import { Show } from './Show';
import { ArrowUp } from './ArrowUp';
import { ArrowDown } from './ArrowDown';
import { ArrowRight } from './ArrowRight';
import { Course } from './Course';
import { Homework } from './Homework';
import { Leave } from './Leave';
import { Chair } from './Chair';
import { Analytic } from './Analytic';
import { Wallet } from './Wallet';
import { Text } from './Text';
import { Unlock } from './Unlock';
import { Personal } from './Personal';
import { Like } from './Like';
import { Notification } from './Notification';
import { Theme } from './Theme';
import { Globe } from './Globe';
import { ExchangeArrows } from './ExchangeArrows';
import { Settings } from './Settings';
import { Filter } from './Filter';
import { JobApply } from './JobApply';
import { Dollar } from './Dollar';
import { Delete } from './Delete';
import { TimeSquare } from './TimeSquare';
import { Edit } from './Edit';
import { Burger } from './Burger';
import { Close } from './Close';
import { Add } from './Add';
import { Download } from './Download';
import { Hide } from './Hide';
import { Leadership } from './Leadership';
import { Home } from './Home';
import { BriefcaseSearch } from './BriefcaseSearch';
import { QuestionMark } from './QuestionMark';
import { Exclamation } from './Exclamation';
import { Support } from './Support';
import { AboutUs } from './AboutUs';
import { PlayForCourse } from './PlayForCourse';

export const icons: Record<
  IconNames,
  FunctionComponent<SVGProps<SVGSVGElement>>
> = {
  'arrow-left': ArrowLeft,
  'briefcase-search': BriefcaseSearch,
  'question-mark': QuestionMark,
  exclamation: Exclamation,
  qct: QCT,
  search: Search,
  link: Link,
  refresh: Refresh,
  play: Play,
  'play-for-course': PlayForCourse,
  study: Study,
  threeDCube: ThreeDCube,
  'vr-glasses': VrGlasses,
  'wallet-passesApp': WalletPassesApp,
  chat: Chat,
  market: Market,
  'social-network': SocialNetwork,
  'transaction-history': TransactionHistory,
  show: Show,
  'arrow-up': ArrowUp,
  'arrow-down': ArrowDown,
  'arrow-right': ArrowRight,
  course: Course,
  homework: Homework,
  leave: Leave,
  chair: Chair,
  analytic: Analytic,
  wallet: Wallet,
  text: Text,
  unlock: Unlock,
  personal: Personal,
  like: Like,
  notification: Notification,
  theme: Theme,
  globe: Globe,
  'exchange-arrows': ExchangeArrows,
  settings: Settings,
  filter: Filter,
  'job-apply': JobApply,
  dollar: Dollar,
  delete: Delete,
  'time-square': TimeSquare,
  edit: Edit,
  burger: Burger,
  close: Close,
  add: Add,
  download: Download,
  hide: Hide,
  leadership: Leadership,
  home: Home,
  support: Support,
  'about-us': AboutUs,
};
