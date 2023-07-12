import {Avatar, Rate, Space, Table, Typography} from 'antd';
import {useEffect, useState} from 'react';
import {getInventory, getOrders} from '../../API';

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then(res => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4} style={{fontSize: 30}}>
        Orders
      </Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: <span style={{fontSize: 18, fontWeight: '500'}}>Title</span>,
            dataIndex: 'title',
            render: value => <span style={{fontSize: 18}}>{value}</span>,
          },
          {
            title: <span style={{fontSize: 18, fontWeight: '500'}}>Price</span>,
            dataIndex: 'price',
            render: value => (
              <span style={{fontSize: 18, fontWeight: 'bold'}}>${value}</span>
            ),
          },
          {
            title: 'DiscountedPrice',
            dataIndex: 'discountedPrice',
            render: value => (
              <span style={{fontSize: 18, fontWeight: 'bold'}}>${value}</span>
            ),
          },
          {
            title: 'Quantity',
            dataIndex: 'quantity',
            render: value => <span style={{fontSize: 18}}>{value}</span>,
          },
          {
            title: 'Total',
            dataIndex: 'total',
            render: value => <span style={{fontSize: 18}}>{value}</span>,
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}></Table>
    </Space>
  );
}
export default Orders;
