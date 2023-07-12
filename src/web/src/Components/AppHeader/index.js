import {BellFilled, MailOutlined} from '@ant-design/icons';
import {Badge, Drawer, Image, List, Space, Typography} from 'antd';
import {useEffect, useState} from 'react';
import {getComments, getOrders} from '../../API';
import logo from '../../Images/logo.jpg';
function AppHeader() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    getComments().then(res => {
      setComments(res.comments);
    });
    getOrders().then(res => {
      setOrders(res.products);
    });
  }, []);

  return (
    <div className="AppHeader">
      <Image width={90} src={logo}></Image>
      <Typography.Title className="titleAdmin">Shoea Admin</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{fontSize: 24}}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{fontSize: 24}}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        </Badge>
      </Space>
      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable>
        <List
          dataSource={comments}
          renderItem={item => {
            return <List.Item>{item.body}</List.Item>;
          }}></List>
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable>
        <List
          dataSource={orders}
          renderItem={item => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}></List>
      </Drawer>
    </div>
  );
}
export default AppHeader;
