import { Menu, Dropdown } from "antd";
import { setCurrentGeneration } from "../actions/index";

export const dropDown = () => {
  const onClick = ({ key }) => {
    console.log("call action for setting currentGen");
    setCurrentGeneration(key);
  };

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="generation_i">Generation_i</Menu.Item>
      <Menu.Item key="generation_ii">Generation_ii</Menu.Item>
      <Menu.Item key="generation_iii">Generation_iii</Menu.Item>
      <Menu.Item key="generation_iv">Generation_iv</Menu.Item>
      <Menu.Item key="generation_v">Generation_v</Menu.Item>
      <Menu.Item key="generation_vi">Generation_vi</Menu.Item>
      <Menu.Item key="generation_vii">Generation_vii</Menu.Item>
      <Menu.Item key="generation_viii">Generation_viii</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu} trigger={["click"]}>
        <div className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Choose the highest generation you wish your Pokédex to show
        </div>
      </Dropdown>
    </div>
  );
};

export default dropDown;

// ReactDOM.render(
//   <Dropdown overlay={menu} trigger={["click"]}>
//     <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
//       Choose the highest generation you wish your Pokédex to show
//     </a>
//   </Dropdown>,
//   mountNode
// );
//   }
// export default dropDown;
