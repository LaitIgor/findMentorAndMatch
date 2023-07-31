import {useState, useEffect} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


import {Link, NavLink} from 'react-router-dom';

import icons from '../../../assets/icons.svg';

const HomeIcon = icons + '#home';
const MessagesIcon = icons + '#messages';
const ProfileIcon = icons + '#profile';
const TrophyIcon = icons + '#trophy';
const LightbulbIcon = icons + '#lightbulb';
const CompassIcon = icons + '#compass';

const InfoIcon = icons + '#infooutline';
const LogoutIcon = icons + '#logout';
const StatsIcon = icons + '#stats';

import styles from './styles.module';


// Admin 2 subpages subpage 1 and 2

const sidebarElems = [
{
  btnText: 'Programs',
  btnLink: '/create-programs',
  btnIcon: HomeIcon,
},
{
  btnText: 'Invite',
  btnLink: '/invite-participants',
  btnIcon: MessagesIcon,
},
{
  btnText: 'Matching',
  btnLink: '/matchmaking',
  btnIcon: ProfileIcon,
},
{
  btnText: 'Admin',
  btnLink: '/non-existent',
  btnIcon: CompassIcon,
},
// {
//   btnText: 'Info',
//   btnLink: '/non-existent',
//   btnIcon: InfoIcon,
// },
// {
//   btnText: 'Signout',
//   btnLink: '/login',
//   btnIcon: LogoutIcon,
// },

];

// const sidebarElems = {
//     Programs: {
//         icon: HomeIcon,
//         openLinks: [{
//           path: '/admin-open-program',
//           openText: 'Open program',
//         },
//         {
//           path: '/admin-closed-program',
//           openText: 'Closed program',
//         }],
//         path: '/apphome',
//         openText: 'Invite Participants',
//     }, 
//     Invite: {
//         icon: MessagesIcon,
//         openLinks:[{
//           path: '/invite-participants',
//           openText: 'Invite participant',
//         }],
//         path: '/apphome1',
//         openText: 'Programs',
//     }, 
//     Matching: {
//         icon: ProfileIcon,
//         openLinks:[{
//           path: '/matchmaking',
//           openText: 'Matchmaking',
//         }],
//         path: '/apphome2',
//         openText: 'Matchmaking'
//     }, 
//     Admin: {
//         icon: CompassIcon,
//         openLinks:[],
//         path: '/apphome3',
//         openText: 'Admin'
//     },
//     // Trophies: {
//     //     icon: TrophyIcon,
//     //     path: '/apphome5',
//     //     openText: 'Trophies text'
//     // },
//     Info: {
//         icon: InfoIcon,
//         openLinks:[],
//         path: '/apphome6',
//         openText: 'Detailed info',
//     }, 
//     Signout: {
//         icon: LogoutIcon,
//         openLinks:[],
//         path: '/login',
//         openText: '',
//     }, 
// }

const bottomIcons = {
    Info: {
        icon: InfoIcon,
        openText: 'Detailed info',
    }, 
    Signout: {
        icon: LogoutIcon,
        openText: 'Detailed info',
    }, 
}

const drawerWidth = 260;

const openedMixin = (theme) => ({
    top: '70px',
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  height: 'calc(100% - 70px) !important',
});

const closedMixin = (theme) => ({
    top: '70px',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  // width: '85px !important',
  width: `80px !important`,
  // width: `calc(${theme.spacing(7)} + 1px) !important`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  height: 'calc(100% - 70px) !important',
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    height: 'calc(100% - 80px) !important',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export const AppTemplateHOC = (WrappedComponent) => {
  const WrappedContent = (props) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return <div style={{
      width: '100%', 
      // height: 'calc(100vh - 139px)', 
      // position: 'relative', 
      // paddingLeft: '75px',
      }}>
      <aside className={styles['sidebar-nav']}>
        <ul className={styles['sidebar-list']}>
          {sidebarElems.map((elem) => {
            return  <li key={elem.btnText} className={styles['sidebar-list__item']}>
            <NavLink to={elem.btnLink} className={({isActive}) => isActive ? styles['active'] : ''}>
                <div className={styles['list-item__svg']}>                
                    <svg>
                        <use xlinkHref={elem.btnIcon}></use>
                    </svg>
                </div>
                <p className={styles['list-item__text']}>{elem.btnText}</p>
            </NavLink>
          </li>
          })}
            {/* <li className={styles['sidebar-list__item']}>
              <NavLink to='/apphome' className={({isActive}) => isActive ? styles['active'] : ''}>
                  <div className={styles['list-item__svg']}>                
                      <svg>
                          <use xlinkHref={HomeIcon}></use>
                      </svg>
                  </div>
                  <p className={styles['list-item__text']}>HOME</p>
              </NavLink>
            </li>
            <li className={styles['sidebar-list__item']}>
              <NavLink to='/apphome1' className={({isActive}) => isActive ? styles['active'] : ''}>
                  <div className={styles['list-item__svg']}>                
                      <svg>
                          <use xlinkHref={MessagesIcon}></use>
                      </svg>
                  </div>
                  <p className={styles['list-item__text']}>CHAT</p>
              </NavLink>
            </li>
            <li className={styles['sidebar-list__item']}>
              <NavLink to='/apphome2' className={({isActive}) => isActive ? styles['active'] : ''}>
                  <div className={styles['list-item__svg']}>                
                      <svg>
                          <use xlinkHref={ProfileIcon}></use>
                      </svg>
                  </div>
                  <p className={styles['list-item__text']}>PROFILE</p>
              </NavLink>
            </li>
            <li className={styles['sidebar-list__item']}>
              <NavLink to='/apphome3' className={({isActive}) => isActive ? styles['active'] : ''}>
                  <div className={styles['list-item__svg']}>                
                      <svg>
                          <use xlinkHref={CompassIcon}></use>
                      </svg>
                  </div>
                  <p className={styles['list-item__text']}>EXPLORE</p>
              </NavLink>
            </li> */}
            {/* <li className={styles['sidebar-list__item']}>
              <NavLink to='/apphome4' className={({isActive}) => isActive ? styles['active'] : ''}>
                  <div className={styles['list-item__svg']}>                
                      <svg>
                          <use xlinkHref={LightbulbIcon}></use>
                      </svg>
                  </div>
                  <p className={styles['list-item__text']}>TIPS</p>
              </NavLink>
            </li>
            <li className={styles['sidebar-list__item']}>
              <NavLink to='/apphome5' className={({isActive}) => isActive ? styles['active'] : ''}>
                  <div className={styles['list-item__svg']}>                
                      <svg>
                          <use xlinkHref={TrophyIcon}></use>
                      </svg>
                  </div>
                  <p className={styles['list-item__text']}>TROPHIES</p>
              </NavLink>
            </li> */}
        </ul>
        
        <ul className={`${styles['sidebar-list']} ${styles['sidebar-list--bottom']}`}>
            <li className={styles['sidebar-list__item']}>
              <NavLink to='/apphome6' className={({isActive}) => isActive ? styles['active'] : ''}>
                  <div className={styles['list-item__svg']}>                
                      <svg>
                          <use xlinkHref={InfoIcon}></use>
                      </svg>
                  </div>
                  <p className={styles['list-item__text']}>Info</p>
              </NavLink>
            </li>
            <li className={styles['sidebar-list__item']}>
              <NavLink to='/apphome7' className={({isActive}) => isActive ? styles['active'] : ''}>
                  <div className={styles['list-item__svg']}>                
                      <svg>
                          <use xlinkHref={LogoutIcon}></use>
                      </svg>
                  </div>
                  <p className={styles['list-item__text']}>Signout</p>
              </NavLink>
            </li>
        </ul> 
      </aside>
      <div style={{paddingLeft: '75px'}}><WrappedComponent /></div>
      
    </div>
             
}


{/* <nav className={styles['sidebar-nav']}>
<ul className={styles['sidebar-list']}>
    <li className={styles['sidebar-list__item']}>
    <NavLink to='/apphome' className={({isActive}) => isActive ? styles['active'] : ''}>
        <div className={styles['list-item__svg']}>                
            <svg>
                <use xlinkHref={HomeIcon}></use>
            </svg>
        </div>
        <p className={styles['list-item__text']}>HOME</p>
    </NavLink>
    <div>Home link on the right</div>
    </li>
    <li className={styles['sidebar-list__item']}>
    <NavLink to='/apphome1' className={({isActive}) => isActive ? styles['active'] : ''}>
        <div className={styles['list-item__svg']}>                
            <svg>
                <use xlinkHref={MessagesIcon}></use>
            </svg>
        </div>
        <p className={styles['list-item__text']}>CHAT</p>
    </NavLink>
    </li>
    <li className={styles['sidebar-list__item']}>
    <NavLink to='/apphome2' className={({isActive}) => isActive ? styles['active'] : ''}>
        <div className={styles['list-item__svg']}>                
            <svg>
                <use xlinkHref={ProfileIcon}></use>
            </svg>
        </div>
        <p className={styles['list-item__text']}>PROFILE</p>
    </NavLink>
    </li>
    <li className={styles['sidebar-list__item']}>
    <NavLink to='/apphome3' className={({isActive}) => isActive ? styles['active'] : ''}>
        <div className={styles['list-item__svg']}>                
            <svg>
                <use xlinkHref={CompassIcon}></use>
            </svg>
        </div>
        <p className={styles['list-item__text']}>EXPLORE</p>
    </NavLink>
    </li>
    <li className={styles['sidebar-list__item']}>
    <NavLink to='/apphome4' className={({isActive}) => isActive ? styles['active'] : ''}>
        <div className={styles['list-item__svg']}>                
            <svg>
                <use xlinkHref={LightbulbIcon}></use>
            </svg>
        </div>
        <p className={styles['list-item__text']}>TIPS</p>
    </NavLink>
    </li>
    <li className={styles['sidebar-list__item']}>
    <NavLink to='/apphome5' className={({isActive}) => isActive ? styles['active'] : ''}>
        <div className={styles['list-item__svg']}>                
            <svg>
                <use xlinkHref={TrophyIcon}></use>
            </svg>
        </div>
        <p className={styles['list-item__text']}>TROPHIES</p>
    </NavLink>
    </li>
</ul>

<ul className={`${styles['sidebar-list']} ${styles['sidebar-list--bottom']}`}>
<li className={styles['sidebar-list__item']}>
    <NavLink to='/apphome6' className={({isActive}) => isActive ? styles['active'] : ''}>
        <div className={styles['list-item__svg']}>                
            <svg>
                <use xlinkHref={InfoIcon}></use>
            </svg>
        </div>
        <p className={styles['list-item__text']}>INFO</p>
    </NavLink>
    </li>
    <li className={styles['sidebar-list__item']}>
    <NavLink to='/apphome7' className={({isActive}) => isActive ? styles['active'] : ''}>
        <div className={styles['list-item__svg']}>                
            <svg>
                <use xlinkHref={LogoutIcon}></use>
            </svg>
        </div>
        <p className={styles['list-item__text']}>SIGNOUT</p>
    </NavLink>
    </li>
</ul>


</nav> */}
  return WrappedContent;

  }
   