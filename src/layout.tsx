import { Layout } from "antd";
import {
  Home,
  People,
  Date,
  Share,
  Form,
  Like,
  Close,
  Settings,
} from "./assets";
import { Avatar, Tooltip } from "antd";

import LayoutBody from "./components/LayoutBody";

const { Sider } = Layout;

const navItems = [
  {
    name: "Home",
    icon: <img src={Home} className=' w-[24px] h-[24px]' alt='home' />,
  },
  {
    name: "People",
    icon: <img src={People} className='w-[48px] h-[48px]' alt='users' />,
  },
  {
    name: "Date",
    icon: <img src={Date} className='w-[48px] h-[48px]' alt='dates' />,
  },
  {
    name: "Share",
    icon: <img src={Share} className='w-[48px] h-[48px]' alt='share' />,
  },
  {
    name: "Form",
    icon: <img src={Form} className='w-[48px] h-[48px]' alt='form' />,
  },
  {
    name: "Like",
    icon: <img src={Like} className='w-[48px] h-[48px]' alt='like' />,
  },
  {
    name: "Close",
    icon: <img src={Close} className='w-[24px] h-[24px]' alt='close' />,
  },
];

const LayoutContainer = () => {
  return (
    <Layout className='bg-[#F9FAFF]' hasSider>
      <Sider
        width={72}
        style={{
          background: "white",
          position: "fixed",
          boxShadow: "0px 4px 23px 0px rgba(0, 0, 0, 0.05)",
        }}
        className='h-[100vh] hidden fixed z-40 left-0 right-0 bottom-0 lg:flex flex-col items-center justify-center'
      >
        <div className='flex flex-col items-center justify-between mt-[1.6em]'>
          <Avatar
            style={{
              backgroundColor: "#D9D9D9",
              verticalAlign: "middle",
            }}
            className='w-[30px] font-Poppins text-[10px] h-[30px] mt-[1em] flex items-center justify-center '
            size='large'
            gap={4}
          >
            U
          </Avatar>
          <div className='mt-[2em] flex flex-col items-center justify-center gap-2'>
            {navItems.map(({ name, icon }) => (
              <Tooltip title={name}>
                <span
                  className='cursor-pointer transition  ease-in-out'
                  key={name}
                >
                  {icon}
                </span>
              </Tooltip>
            ))}
          </div>
          <section className='mt-[4em] flex flex-col gap-3 bottom-0 items-end justify-end'>
            <Tooltip title='Settings'>
              <span className='cursor-pointer  transition rounded-[5px] ease-in-out'>
                <img src={Settings} alt='settings' />
              </span>
            </Tooltip>
            <Avatar
              style={{
                backgroundColor: "#B1CDFD",
                verticalAlign: "middle",
              }}
              className='w-[24px] font-Poppins text-[10px] h-[24px] flex items-center justify-center '
              size='large'
              gap={4}
            >
              AS
            </Avatar>
          </section>
        </div>
      </Sider>
      <LayoutBody />
    </Layout>
  );
};

export default LayoutContainer;
