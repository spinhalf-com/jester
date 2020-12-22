import React from 'react';

const CodeEditors = React.lazy(() => import('./views/editors/code-editors/CodeEditors'));
const TextEditors = React.lazy(() => import('./views/editors/text-editors/TextEditors'));

const Invoice = React.lazy(() => import('./views/apps/invoicing/Invoice'));

const AdvancedForms = React.lazy(() => import('./views/forms/advanced-forms/AdvancedForms'));
const BasicForms = React.lazy(() => import('./views/forms/basic-forms/BasicForms'));
const ValidationForms = React.lazy(() => import('./views/forms/validation-forms/ValidationForms'));
const GoogleMaps = React.lazy(() => import('./views/google-maps/GoogleMaps'));
const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Calendar = React.lazy(() => import('./views/plugins/calendar/Calendar'));
const Draggable = React.lazy(() => import('./views/plugins/draggable/Draggable'));
const Spinners = React.lazy(() => import('./views/plugins/spinners/Spinners'));
const DataTable = React.lazy(() => import('./views/tables/data-table/DataTable'));
const Tables = React.lazy(() => import('./views/tables/tables/Tables'));
//const LoadingButtons = React.lazy(() => import('./views/buttons/loading-buttons'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const DomainForm = React.lazy(() => import('./views/Domains/DomainForm'));
const DomainList = React.lazy(() => import('./views/Domains/DomainList'));

const routes = [

    {path: '/', exact: true, name: 'Home', admin: false, auth: false},
    {path: '/dashboard', name: 'Dashboard', admin: false, auth: true, component: Dashboard},
    {path: '/theme', name: 'Theme', admin: false, auth: true, component: Colors, exact: true},
    {path: '/theme/colors', name: 'Colors', admin: false, auth: true, component: Colors},
    {path: '/theme/typography', name: 'Typography', admin: false, auth: true, component: Typography},
    {path: '/base', name: 'base', component: Cards, admin: false, auth: true, exact: true},
    {path: '/base/breadcrumbs', name: 'Breadcrumbs', admin: false, auth: true, component: Breadcrumbs},
    {path: '/base/cards', name: 'Cards', admin: false, auth: true, component: Cards},
    {path: '/base/carousels', name: 'Carousel', admin: false, auth: true, component: Carousels},
    {path: '/base/collapses', name: 'Collapse', admin: false, auth: true, component: Collapses},
    {path: '/base/jumbotrons', name: 'Jumbotrons', admin: false, auth: true, component: Jumbotrons},
    {path: '/base/list-groups', name: 'List Groups', admin: false, auth: true, component: ListGroups},
    {path: '/base/navbars', name: 'Navbars', admin: false, auth: true, component: Navbars},
    {path: '/base/navs', name: 'Navs', admin: false, auth: true, component: Navs},
    {path: '/base/paginations', name: 'Paginations', admin: false, auth: true, component: Paginations},
    {path: '/base/popovers', name: 'Popovers', admin: false, auth: true, component: Popovers},
    {path: '/base/progress-bar', name: 'Progress Bar', admin: false, auth: true, component: ProgressBar},
    {path: '/base/switches', name: 'Switches', admin: false, auth: true, component: Switches},
    {path: '/base/tabs', name: 'Tabs', admin: false, auth: true, component: Tabs},
    {path: '/base/tooltips', name: 'Tooltips', admin: false, auth: true, component: Tooltips},
    {path: '/buttons', name: 'Buttons', admin: false, auth: true, component: Buttons, exact: true},
    {path: '/buttons/buttons', name: 'Buttons', admin: false, auth: true, component: Buttons},
    {path: '/buttons/button-dropdowns', name: 'Dropdowns', admin: false, auth: true, component: ButtonDropdowns},
    {path: '/buttons/button-groups', name: 'Button Groups', admin: false, auth: true, component: ButtonGroups},
    {path: '/buttons/brand-buttons', name: 'Brand Buttons', admin: false, auth: true, component: BrandButtons},
    {path: '/charts', name: 'Charts', admin: false, auth: true, component: Charts},
    {path: '/editors', name: 'Editors', admin: false, auth: true, component: CodeEditors, exact: true},
    {path: '/editors/code-editors', name: 'Code Editors', admin: false, auth: true, component: CodeEditors},
    {path: '/editors/text-editors', name: 'Text Editors', admin: false, auth: true, component: TextEditors},
    {path: '/forms', name: 'Forms', admin: false, auth: true, component: BasicForms, exact: true},
    {path: '/forms/advanced-forms', name: 'Advanced Forms', admin: false, auth: true, component: AdvancedForms},
    {path: '/forms/basic-forms', name: 'Basic Forms', admin: false, auth: true, component: BasicForms},
    {path: '/forms/validation-forms', name: 'Form Validation', admin: false, auth: true, component: ValidationForms},
    {path: '/google-maps', name: 'Google Maps', admin: false, auth: true, component: GoogleMaps},
    {path: '/icons', exact: true, name: 'Icons', admin: false, auth: true, component: CoreUIIcons},
    {path: '/icons/coreui-icons', name: 'CoreUI Icons', admin: false, auth: true, component: CoreUIIcons},
    {path: '/icons/flags', name: 'Flags', admin: false, auth: true, component: Flags},
    {path: '/icons/brands', name: 'Brands', admin: false, auth: true, component: Brands},
    {path: '/notifications', name: 'Notifications', admin: false, auth: true, component: Alerts, exact: true},
    {path: '/notifications/alerts', name: 'Alerts', admin: false, auth: true, component: Alerts},
    {path: '/notifications/badges', name: 'Badges', admin: false, auth: true, component: Badges},
    {path: '/notifications/modals', name: 'Modals', admin: false, auth: true, component: Modals},
    {path: '/notifications/toaster', name: 'Toaster', admin: false, auth: true, component: Toaster},
    {path: '/plugins', name: 'Plugins', admin: false, auth: true, component: Calendar, exact: true},
    {path: '/plugins/calendar', name: 'Calendar', admin: false, auth: true, component: Calendar},
    {path: '/plugins/draggable', name: 'Draggable Cards', admin: false, auth: true, component: Draggable},
    {path: '/plugins/spinners', name: 'Spinners', admin: false, auth: true, component: Spinners},
    {path: '/tables', name: 'Tables', admin: false, auth: true, component: Tables, exact: true},
    {path: '/tables/data-table', name: 'Data Table', admin: false, auth: true, component: DataTable},
    {path: '/tables/tables', name: 'Tables', admin: false, auth: true, component: Tables},
    {path: '/widgets', name: 'Widgets', admin: false, auth: true, component: Widgets},
    {path: '/apps', name: 'Apps', admin: false, auth: true, component: Invoice, exact: true},
    {path: '/apps/invoicing', name: 'Invoice', admin: false, auth: true, component: Invoice, exact: true},
    {path: '/apps/invoicing/invoice', name: 'Invoice', admin: false, auth: true, component: Invoice},
    {path: '/users', exact: true, name: 'Users', admin: true, auth: true, component: Users},
    {path: '/users/:id', exact: true, name: 'User Details', admin: false, auth: true, component: User},
    {path: '/domains', exact: true, name: 'Domains', admin: false, auth: true, component: DomainList},
    {path: '/domains/add', exact: true, name: 'Create Domain', admin: false, auth: true, component: DomainForm},


];

export default routes;
