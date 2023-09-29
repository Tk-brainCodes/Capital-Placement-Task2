import {
  Layout,
  Menu,
  Input,
  Checkbox,
  Space,
  Typography,
  Dropdown,
} from "antd";
import { Danger, Search } from "../assets";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import CheckboxCard from "./CheckboxCard";
import { ArrowSmall, File } from "../assets";

const { Content, Header } = Layout;
const { Text } = Typography;

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

const menuPersonalInfo = (
  <Menu>
    <Menu.Item key='personalInfo1'>Option 1</Menu.Item>
    <Menu.Item key='personalInfo2'>Option 2</Menu.Item>
  </Menu>
);

const menuWorkExperience = (
  <Menu>
    <Menu.Item key='workExp1'>Option 1</Menu.Item>
    <Menu.Item key='workExp2'>Option 2</Menu.Item>
  </Menu>
);

const menuActivityFilter = (
  <Menu>
    <Menu.Item key='activityFilter1'>Option 1</Menu.Item>
    <Menu.Item key='activityFilter2'>Option 2</Menu.Item>
  </Menu>
);

const menuAdvancedFilter = (
  <Menu>
    <Menu.Item key='advancedFilter1'>Option 1</Menu.Item>
    <Menu.Item key='advancedFilter2'>Option 2</Menu.Item>
  </Menu>
);

const ContentWrapper = () => {
  return (
    <Content className='bg-[#F9FAFF] w-[90vw]'>
      <div className='px-4 py-4 w-full flex max-sm:flex-wrap max-md:flex-wrap gap-6'>
        <div
          className='h-auto w-[385px]'
          style={{
            marginBottom: "16px",
            marginLeft: "-10px",
            background: "none",
          }}
        >
          <div className='lg:w-[385px]  max-sm:w-[90vw] max-md:w-[90vw] h-12 p-4 bg-white rounded-lg border border-zinc-100 justify-between items-center inline-flex gap-3 font-Poppins'>
            <Input
              prefix={<img src={Search} className='w-[20px] h-[20px]' />}
              placeholder='Search by name, edu, exp or #tag'
              className='border-none font-normal outline-none text-[14px] text-[#9AA6AC] font-Poppins'
            />
            <span className='cursor-pointer'>
              <img src={Danger} alt='danger' className='w-[20px] h-[20px]' />
            </span>
          </div>
          <div className='lg:w-[385px]  max-sm:w-[90vw] max-md:w-[90vw] bg-white mt-[2em] h-[58px] px-4 py-[18px] justify-between items-center inline-flex'>
            <div className='text-[14px] text-[#0B0B0B] font-medium font-Poppins leading-snug'>
              Filters
            </div>
            <div></div>
            <div className="text-neutral-950 text-xs font-light font-['Poppins'] leading-snug">
              0 Selected
            </div>
          </div>
          <Dropdown overlay={menuPersonalInfo} trigger={["click"]}>
            <div className='lg:w-[385px] cursor-pointer max-sm:w-[90vw] max-md:w-[90vw] bg-white h-[58px] border-t-2 border-gray-100 px-4 py-[18px] justify-between items-center inline-flex'>
              <div className='justify-start items-center gap-2 flex'>
                <img src={File} className='w-4 h-4 relative' />
                <div className="text-neutral-950 text-sm font-normal font-['Poppins'] leading-snug">
                  Personal Information
                </div>
              </div>
              <img src={ArrowSmall} className='w-[18px] h-[18px] relative' />
            </div>
          </Dropdown>

          {/* Work Experience Dropdown */}
          <Dropdown overlay={menuWorkExperience} trigger={["click"]}>
            <div className='lg:w-[385px] cursor-pointer max-sm:w-[90vw] max-md:w-[90vw] bg-white h-[58px] border-t-2 border-gray-100 px-4 py-[18px] justify-between items-center inline-flex'>
              <div className='justify-start items-center gap-2 flex'>
                <img src={File} className='w-4 h-4 relative' />
                <div className="text-neutral-950 text-sm font-normal font-['Poppins'] leading-snug">
                  Work Experience
                </div>
              </div>
              <img src={ArrowSmall} className='w-[18px] h-[18px] relative' />
            </div>
          </Dropdown>

          {/* Activity Filter Dropdown */}
          <Dropdown overlay={menuActivityFilter} trigger={["click"]}>
            <div className='lg:w-[385px] cursor-pointer max-sm:w-[90vw] max-md:w-[90vw] bg-white h-[58px] border-t-2 border-gray-100 px-4 py-[18px] justify-between items-center inline-flex'>
              <div className='justify-start items-center gap-2 flex'>
                <img src={File} className='w-4 h-4 relative' />
                <div className="text-neutral-950 text-sm font-normal font-['Poppins'] leading-snug">
                  Activity Filter
                </div>
              </div>
              <img src={ArrowSmall} className='w-[18px] h-[18px] relative' />
            </div>
          </Dropdown>

          {/* Advanced Filter Dropdown */}
          <Dropdown overlay={menuAdvancedFilter} trigger={["click"]}>
            <div className='lg:w-[385px] cursor-pointer max-sm:w-[90vw] max-md:w-[90vw] bg-white h-[58px] border-t-2 border-gray-100 px-4 py-[18px] justify-between items-center inline-flex'>
              <div className='justify-start items-center gap-2 flex'>
                <img src={File} className='w-4 h-4 relative' />
                <div className="text-neutral-950 text-sm font-normal font-['Poppins'] leading-snug">
                  Advanced Filter
                </div>
              </div>
              <img src={ArrowSmall} className='w-[18px] h-[18px] relative' />
            </div>
          </Dropdown>
        </div>
        <div
          className='bg-white border-none max-sm:w-full max-md:w-full lg:w-[743px] rounded-[16px] h-auto '
          style={{ marginBottom: "16px", padding: "0" }}
        >
          <Header
            style={{ background: "none", height: "auto" }}
            className='w-full h-auto flex items-center justify-between max-md:flex-wrap max-sm:flex-wrap'
          >
            <span className='font-Poppins -ml-[2em] flex items-center gap-6 font-semibold text-[#1D4ED8] text-[14px]'>
              <Checkbox className='w-4 h-4' onChange={onChange} />
              247 Candidates
            </span>
            <section className='ml-[3em]'>
              <Space align='center'>
                <div className='justify-start items-start gap-2 flex'>
                  <Text
                    className='font-Poppings font-medium text-[14px] text-[#1D4ED8]'
                    strong
                  >
                    Qualified
                  </Text>
                </div>
                <Text className='text-[#F3F3F4]'>|</Text>
                <div className='justify-center items-start gap-2 flex'>
                  <Text className='font-Poppins font-normal text-[#0B0B0B]'>
                    Task
                  </Text>
                  <div
                    style={{ padding: "1px 6px" }}
                    className='px-1.5 py-px bg-[#F7F8FD] rounded-[40px] flex-col justify-start items-start gap-2.5 inline-flex'
                  >
                    <Text style={{ fontSize: "10px" }}>25</Text>
                  </div>
                </div>
                <Text className='text-[#F3F3F4]'>|</Text>
                <div className='justify-center items-start gap-2 flex'>
                  <Text className='font-Poppins font-normal text-[#0B0B0B]'>
                    Disqualified
                  </Text>
                  <div
                    style={{ padding: "1px 6px" }}
                    className='px-1.5 py-px bg-[#F7F8FD] rounded-[40px] flex-col justify-start items-start gap-2.5 inline-flex'
                  >
                    <Text style={{ fontSize: "10px" }}>78</Text>
                  </div>
                </div>
              </Space>
            </section>
          </Header>
          <CheckboxCard />
        </div>
      </div>
    </Content>
  );
};

export default ContentWrapper;
