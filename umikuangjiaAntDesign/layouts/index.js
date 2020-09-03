import {Layout,Menu} from "antd";
import styles from "./index.css";
import Link from "umi/link";
const {Header,Footer,Content} = Layout;
export default function(props) {
    // if(props.location.pathname ==='/404' || props.location.pathname === '/login'){
    //    return <div>{props.children}</div>
    // }

    if(props.location.pathname === '/login'){
      return <div>{props.children}</div>
    }

    const selectedKeys = [props.location.pathname];

    //如果路由是404或者login，什么都不渲染
    return (
      // <div>
      //   <h1>布局页面</h1>
      //   <div>{props.children}</div>
      // </div>
      <Layout>
        {/* 页头 */}
        <Header className={styles.header}>
          <img className={styles.logo} src="https://img.kaikeba.com/logo-new.png" />
          <Menu
            them="dark"
            mode="horizontal"
            selectedKeys={selectedKeys}
            defaultSelectedKeys={["2"]}
            style={{lineHeight:"64px",float:"left"}}
            >
            <Menu.Item key="/goods">
              <Link to="/goods">商品</Link>
            </Menu.Item>
            <Menu.Item key="/users">
              <Link to="/users">用户</Link>
            </Menu.Item>
            <Menu.Item key="/about">
              <Link to="/about">关于</Link>
            </Menu.Item>
          </Menu>
        </Header>
        {/* 内容 */}
        <Content className={styles.content}>
          <div className={styles.box}>{props.children}</div>
        </Content>
        {/* 页脚 */}
        <Footer className={styles.footer}>开课啦</Footer>
      </Layout>
    );
  }