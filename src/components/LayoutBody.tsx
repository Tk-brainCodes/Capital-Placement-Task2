import { Layout } from "antd";
import { Dropdown, Button, Row, Col } from "antd";
import ContentWrapper from "./Content";
import CustomDropdown from "./CustomDropdown";
import {
  Tag,
  CancelUser,
  AcceptUser,
  Chat,
  Mail,
  DropdownWhite,
  Book,
  Player,
} from "../assets";

const { Header, Footer } = Layout;

const LayoutBody = () => {
  const ButtonItems = [
    {
      name: "Tag",
      icon: <img src={Tag} alt='tag' />,
    },
    {
      name: "Reject User",
      icon: <img src={CancelUser} alt='cancel user' />,
    },
    {
      name: "Accept User",
      icon: <img src={AcceptUser} alt='accept user' />,
    },
    {
      name: "Chat",
      icon: <img src={Chat} alt='chat' />,
    },
    {
      name: "email",
      icon: <img src={Mail} alt='email' />,
    },
  ];

  return (
    <Layout
      className='h-auto site-layout w-[90vw] flex flex-col items-center justify-center lg:px-[4em] py-2 lg:ml-[4.5em] max-md:p-2 max-sm:p-2'
      style={{ background: "#F9FAFF" }}
    >
      <Header
        className='flex items-center px-2 py-2 justify-between flex-wrap w-full md:w-[100vw] lg:w-[90vw]'
        style={{ background: "none", height: "auto" }}
      >
        <h1 className='font-Poppins w-[300px] mb-[1em] h-auto flex flex-col items-start text-[#1D4ED8] font-semibold text-[20px]'>
          London Internship Program
          <span className='font-Poppins -mt-[17px] text-[#0B0B0B] text-xs font-light'>
            London
          </span>
        </h1>
        <CustomDropdown />
        <div className='flex mb-[1em] max-sm:flex-wrap items-center justify-between gap-3'>
          <span className='flex items-center gap-2'>
            {ButtonItems.map(({ name, icon }) => (
              <Button
                className='bg-white shadow-custom2 border-custom'
                key={name}
                icon={icon}
                href='#'
              />
            ))}
          </span>
          <Dropdown.Button
            className=' text-white font-Poppins w-[253px] rounded-lg text-[13px] font-normal'
            icon={<img src={DropdownWhite} />}
            disabled
            size='large'
            style={{ background: "#1D5ECD" }}
          >
            <span className='text-white'>Move To Video Interview I</span>
          </Dropdown.Button>
        </div>
      </Header>
      <ContentWrapper />
      <Footer
        style={{ position: "fixed", background: "none" }}
        className='flex lg:items-end lg:justify-end justify-center items-center lg:ml-[60em] relative bottom-0 z-40'
      >
        <Row gutter={8} align='middle' justify='start'>
          <Col>
            <div
              style={{ padding: " 4px 16px" }}
              className='ant-div bg-[#F7F8FD] cursor-pointer  flex items-center rounded-[16px]  justify-between gap-3'
            >
              <img src={Player} className='ant-icon w-[20px] h-[20px]' />
              <div className='ant-text'>4</div>
            </div>
          </Col>
          <Col>
            <div
              style={{ padding: " 4px 16px" }}
              className='ant-div flex items-center cursor-pointer rounded-[16px]  justify-between gap-3 bg-[#E3EBFF]'
            >
              <img src={Book} className='ant-icon w-[20px] h-[20px] ' />
              <div className='ant-text font-Poppins text-[14px] text-[#1D4ED8]'>
                5 Programs
              </div>
            </div>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

export default LayoutBody;
