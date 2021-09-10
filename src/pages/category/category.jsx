import React from 'react'
import { Card, Table, Button, Tag, Space } from 'antd'
import './category.less'
function Category() {
    //Card左侧标题
    const title = '一级分类列表'
    //Card右侧标题
    const extra = (
        <Button type='primary'>添加</Button>
    )
    //Table内容
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '居住城市',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '标签',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: '请',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a>添加 {record.name}</a>
                    <a>删除</a>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: '小木曾夜暗',
            age: 22,
            address: '札幌',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: '北原液氨',
            age: 24,
            address: '京都',
            tags: ['loser'],
        },
        {
            key: '3',
            name: '冬马暗夜',
            age: 23,
            address: '维也纳',
            tags: ['cool', 'teacher'],
        },
    ];
    return (
        <Card title={title} extra={extra} >
            <Table dataSource={data} columns={columns} />
        </Card>
    );
}
export default Category;