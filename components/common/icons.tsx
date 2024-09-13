import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  ArrowRightLeft,
  BriefcaseMedical,
  Building,
  Calendar,
  CalendarCheck,
  CalendarX2,
  Camera,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsRightLeft,
  CircleX,
  Command,
  CreditCard,
  DollarSign,
  EllipsisVertical,
  File,
  FileText,
  FlaskConical,
  HelpCircle,
  History,
  Image,
  Instagram,
  Laptop,
  LayoutDashboard,
  LibraryBig,
  LineChart,
  ListChecks,
  Loader2,
  Lock,
  type LucideProps,
  Moon,
  MoreVertical,
  MoveLeft,
  MoveRight,
  MoveUpRight,
  PanelRight,
  Pencil,
  Pin,
  Pizza,
  Play,
  Plus,
  PlusIcon,
  RotateCcw,
  Search,
  Settings,
  ShieldAlert,
  ShoppingBag,
  ShoppingCart,
  SlidersHorizontal,
  Split,
  RefreshCw,
  SunMedium,
  Trash,
  GitPullRequest,
  UserRound,
  UserRoundCog,
  Users,
  Warehouse,
  X,
  Zap,
  Wallet,
  Store,
  Phone,
  Mail,
  CircleCheck,
  ActivityIcon,
  LogOut,
  Bell

} from "lucide-react";

export const Icons = {
  laptop: Laptop,
  logOut: LogOut,
  notification: Bell,
  track: ActivityIcon,
  branch: Store,
  start: Play,
  end: CircleCheck,
  phone: Phone,
  mail: Mail,
  reverse: RotateCcw,
  calendarCheck: CalendarCheck,
  moveUpRight: MoveUpRight,
  refresh: RefreshCw,
  shoppingCart: ShoppingCart,
  exchange: ArrowRightLeft,
  split: Split,
  chevronDown: ChevronDown,
  warehouse: Warehouse,
  clear: CircleX,
  profile: UserRoundCog,
  pencil: Pencil,
  x: X,
  request: GitPullRequest,
  shiled: ShieldAlert,
  setting: Settings,
  log: Activity,
  lock: Lock,
  assign: ChevronsRightLeft,
  reschedule: History,
  medical: BriefcaseMedical,
  cosmetic: Camera,
  chart: LineChart,
  // pin: Pin,
  info: LibraryBig,
  test: FlaskConical,
  dotMenu: EllipsisVertical,
  zap: Zap,
  panelRight: PanelRight,
  close: X,
  money: Wallet,
  plus: PlusIcon,
  calander: Calendar,
  display: SlidersHorizontal,
  spinner: Loader2,
  dashboard: LayoutDashboard,
  user: UserRound,
  users: Users,
  task: ListChecks,
  store: ShoppingBag,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  building: Building,
  page: File,
  search: Search,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  arrowRight: MoveRight,
  arrorLeft: MoveLeft,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  pin: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="blue"
      stroke="blue"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-pin"
      {...props}
    >
      <line x1="12" x2="12" y1="17" y2="22" />
      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
    </svg>
  ),
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  check: Check,
  tooth: ({ ...props }: LucideProps) => (
    <svg
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="18px"
      height="18px"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      {...props}
    >
      <g>
        <path
          className="st0"
          d="M363.4,1.995c-53.797-8.078-84.828,10.813-107.406,13.5c-22.563-2.688-53.594-21.578-107.391-13.5
		C86.931,11.276,46.322,70.323,55.541,169.292c9.547,102.531,68.984,178.078,76.141,272.5c6.938,91.453,53.813,78.25,65.734,45.875
		c11.938-32.375,32.328-121.406,58.578-121.406s46.656,89.031,58.578,121.406c11.938,32.375,58.813,45.578,65.75-45.875
		c7.156-94.422,66.594-169.969,76.141-272.5C465.666,70.323,425.072,11.276,363.4,1.995z"
        />
      </g>
    </svg>
  ),
  upload: ({ ...props }: LucideProps) => (
    <svg
      version="1.1"
      {...props}
      width="40"
      height="40"
      id="Uploaded to svgrepo.com"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fontSize={"10px"}
      xmlSpace="preserve"
      fill="#808080"
      className="text-gray-400"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <style type="text/css"> </style>
        <path
          className="puchipuchi_een"
          d="M22.414,23.586c0.781,0.781,0.781,2.047,0,2.828c-0.78,0.781-2.048,0.781-2.828,0L18,24.828V29 c0,1.104-0.896,2-2,2s-2-0.896-2-2v-4.172l-1.586,1.586c-0.78,0.781-2.048,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l5-5 c0.78-0.781,2.048-0.781,2.828,0L22.414,23.586z M26,10c0-4.971-4.029-9-9-9c-4.326,0-7.935,3.053-8.8,7.12C7.812,8.042,7.411,8,7,8 c-3.314,0-6,2.686-6,6s2.686,6,6,6h4.758l2.121-2.121C14.445,17.312,15.198,17,16,17c0.802,0,1.555,0.312,2.121,0.879L20.242,20H26 c2.761,0,5-2.239,5-5S28.761,10,26,10z"
        ></path>
      </g>
    </svg>
  ),
};
