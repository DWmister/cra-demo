import { useEffect } from 'react'
import { Table, Button, Tag } from 'antd'
import { assignData } from '@/config/constants'

export default function Detail (props) {
  useEffect(() => {
    const fodderName = props.match.params.fodderName
    document.title = `中台模版 - ${fodderName}`
  }, [])

  const assignHeader = [
    {
      title: '项目',
      dataIndex: 'project',
      align: 'center'
    },
    {
      title: '语种',
      align: 'center',
      dataIndex: 'language'
    },
    {
      title: '角色',
      align: 'center',
      dataIndex: 'roles',
      render: roles => (
        <>
          {roles.map(tag => {
            let color = '#f50'
            if (tag === '译者') color = '#2db7f5'
            return (
              <Tag color={ color } key={ tag }>
                { tag }
              </Tag>
            )
          })}
        </>
      )
    },
    {
      title: '账号',
      align: 'center',
      dataIndex: 'account'
    },
    {
      title: '分类',
      align: 'center',
      dataIndex: 'category',
      render: category => {
        let color = 'red'
        if (category === 'Freelancer') color = 'magenta'
        if (category === 'Internal') color = 'cyan'
        return (
          <Tag color={ color } key={ category }>
            { category }
          </Tag>
        )
      }
    },
    {
      title: '姓名',
      align: 'center',
      dataIndex: 'fullName'
    },
    {
      title: '目标语言',
      align: 'center',
      dataIndex: 'target',
      render: langs => langs.join(', ')
    },
    {
      title: '费用',
      align: 'center',
      dataIndex: 'price'
    },
    {
      title: '状态',
      align: 'center',
      dataIndex: 'entryStatus'
    },
    {
      title: '备注',
      align: 'center',
      dataIndex: 'note'
    },
    {
      title: 'Action',
      align: 'center',
      fixed: 'right',
      render: (text, record) => (
        <Button
          type='primary'
          danger
          size='small'
          onClick={ _ => handleDelete(text) }
        >
          删除
        </Button>
      )
    }
  ]

  const handleDelete = data => {
    console.log(data)
  }

  return (
    <div className='detailPage'>
      <Table
        rowKey={ row => row.identifier + row.language + row.project }
        columns={ assignHeader }
        dataSource={ assignData }
        scroll={ { x: 1500 } }
        sticky
        pagination={ false }
      />
    </div>
  )
}
