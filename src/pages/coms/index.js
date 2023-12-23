import React, { useState, useEffect } from 'react';
import { Table, Pagination } from 'antd';


const About = () => {
    const [tableData, setTableData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;

    useEffect(() => {
        // 模拟从后端获取动态表头和数据的异步操作
        // 实际应用中，你需要替换下面的模拟数据为从后端获取的数据
        const fetchDataFromBackend = async () => {
            // 模拟从后端获取的动态表头数据
            const dynamicColumns = [
                { title: 'Name', dataIndex: 'name', key: 'name' },
                { title: 'Age', dataIndex: 'age', key: 'age' },
                { title: 'Address', dataIndex: 'address', key: 'address' },
                // Add more dynamic columns as needed
            ];

            // 模拟从后端获取的数据
            const dynamicData = [
                { key: '1', id: 1, name: 'John Doe', age: 11 },
                { key: '2', id: 2, name: 'asd', age: 11 },
                { key: '3', id: 3, name: 'xzcsdf', age: 11 },
                { key: '4', id: 4, name: 'fhhrth', age: 11 },
                { key: '5', id: 4, name: 'terscs ', age: 11 },
                // Add more dynamic data as needed
            ];

            setColumns(dynamicColumns);
            setTableData(dynamicData);
        };

        fetchDataFromBackend();
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Table
                style={{ width: '100%' }}
                columns={columns}
                dataSource={tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
                pagination={false} // 禁用表格自带的分页器
            />
            <div style={{ marginTop: '16px' }}>
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={tableData.length}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default About;