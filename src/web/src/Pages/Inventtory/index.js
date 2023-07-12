import {Avatar, Rate, Space, Table, Typography} from 'antd';
import {useEffect, useState} from 'react';
import {getInventory} from '../../API';

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// Cấu hình Firebase SDK
const firebaseConfig = {
  apiKey: 'AIzaSyBlBfNJq1YdGIES0G2q-57ExWwKVXcB0oY',
  authDomain: 'shoea-firebase.firebaseapp.com',
  storageBucket: 'shoea-firebase.appspot.com',
};

// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then(res => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);
  // Firebase code for fetching data
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      try {
        const snapshot = await firebase
          .firestore()
          .collection('Category')
          .doc('nike')
          .collection('products')
          .get();

        const productsData = snapshot.docs.map(doc => doc.data());
        setProducts(productsData);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ Firestore: ', error);
      }
    };
    console.log(products);
    fetchDataFromFirestore();
  }, []);
  return (
    <>
      <Space size={20} direction="vertical">
        <Typography.Title level={4} style={{fontSize: 30}}>
          Inventory
        </Typography.Title>
        <Table
          loading={loading}
          columns={[
            {
              title: (
                <span style={{fontSize: 18, fontWeight: '500'}}>Thumbnail</span>
              ),
              dataIndex: 'thumbnail',
              render: link => {
                return <Avatar src={link} style={{width: 60, height: 60}} />;
              },
            },
            {
              title: (
                <span style={{fontSize: 18, fontWeight: '500'}}>Title</span>
              ),
              dataIndex: 'title',
              render: value => <span style={{fontSize: 18}}>{value}</span>,
            },
            {
              title: (
                <span style={{fontSize: 18, fontWeight: '500'}}>Price</span>
              ),
              dataIndex: 'price',
              render: value => (
                <span style={{fontSize: 18, fontWeight: 'bold'}}>${value}</span>
              ),
            },
            {
              title: (
                <span style={{fontSize: 18, fontWeight: '500'}}>Rating</span>
              ),
              dataIndex: 'rating',
              render: rating => {
                return <Rate value={rating} allowHalf disabled />;
              },
            },
            {
              title: (
                <span style={{fontSize: 18, fontWeight: '500'}}>Stock</span>
              ),
              dataIndex: 'stock',
              render: value => <span style={{fontSize: 18}}>{value}</span>,
            },

            {
              title: (
                <span style={{fontSize: 18, fontWeight: '500'}}>Brand</span>
              ),
              dataIndex: 'brand',
              render: value => <span style={{fontSize: 18}}>{value}</span>,
            },
            {
              title: (
                <span style={{fontSize: 18, fontWeight: '500'}}>Category</span>
              ),
              dataIndex: 'category',
              render: value => <span style={{fontSize: 18}}>{value}</span>,
            },
          ]}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}></Table>
      </Space>
    </>
  );
}
export default Inventory;
