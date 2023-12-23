import React, { useState, useEffect } from 'react';
import { Table, Pagination } from 'antd';
import { Header } from 'antd/es/layout/layout';


const About = () => {
    const [tableData, setTableData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        // 模拟从后端获取动态表头和数据的异步操作
        // 实际应用中，你需要替换下面的模拟数据为从后端获取的数据
        const fetchDataFromBackend = async () => {
            // 模拟从后端获取的动态表头数据
            const dynamicColumns = [
                { title: '序号', dataIndex: 'id', key: 'id', width: 500 },
                { title: '名字', dataIndex: 'name', key: 'name' },
                { title: '年纪', dataIndex: 'age', key: 'age' },
                // Add more dynamic columns as needed
            ];

            // 生成100条数据的数组
            const data = [];

            for (let i = 0; i < 100; i++) {
                data.push({
                    key: `${i + 1}`,
                    id: i + 1,
                    name: 'John Doe' + i,
                    age: 121 + i,
                });
            }

            setColumns(dynamicColumns);
            setTableData(data);
        };

        fetchDataFromBackend();
    }, []);

    const handlePageChange = (page, size) => {
        setCurrentPage(page);
        setPageSize(size)
    };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = tableData.slice(startIndex, endIndex);

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%', height: '40px', textAlign: 'center', linHeight: '40px' }}>
                动态渲染表格
            </div>
            <Table
                style={{ width: '100%' }}
                columns={columns}
                dataSource={paginatedData}
                pagination={false} // 禁用表格自带的分页器
                scroll={{ y: 600 }}
                summary={() => (
                    <Table.Summary>
                        <Table.Summary.Row>
                            {/* <Table.Summary.Cell index={0}></Table.Summary.Cell>
                            <Table.Summary.Cell index={1}></Table.Summary.Cell> */}
                            <Pagination
                                current={currentPage}
                                pageSize={pageSize}
                                total={tableData.length}
                                onChange={handlePageChange}
                                style={{ margin: '10px', textAlign: 'center' }}
                            />
                        </Table.Summary.Row>
                    </Table.Summary>

                )}
            />
        </div>
    );
};

export default About;