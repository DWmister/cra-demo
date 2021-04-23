import { useState } from 'react'
import { Upload, message } from 'antd'
import { shiftByte } from '@/utils/utils'
import { DownloadOutlined } from '@ant-design/icons'
import './index.scss'

/**
 * props 参数及格式同Upload组件  具体参考：https://ant.design/components/upload-cn/#API
 * accept     @string     可接受的上传类型  .suffix即可，有多个则逗号分割
 * limitSize  @string     尺寸限制  3MB/128KB/1GB等等
 * renderUI   @reactNode  上传组件的UI显示
 */
export default function CUpload (props) {
  console.log(props)
  const [fileList, setFileList] = useState(props.defaultFileList || [])
  const [disabled, setDisabled] = useState(false)

  return (
    <div className='CUpload'>
      <Upload
        { ...props }
        disabled={ disabled }
        beforeUpload={ file => beforeUpload(file) }
        onChange={ status => onChange(status) }
        showUploadList={ {
          showDownloadIcon: true,
          downloadIcon: file => <DownloadOutlined onClick={ _ => download(file) } />,
          showRemoveIcon: true
        } }
      >
        { !fileList.length && props.renderUI }
      </Upload>
    </div>
  )

  // 上传前校验
  function beforeUpload (file) {
    if (props.limitSize) {
      const limitSize = shiftByte(props.limitSize)
      if (limitSize < file.size) {
        message.warning(`文件尺寸需小于 ${props.limitSize}!`)
        return Upload.LIST_IGNORE
      }
    }
    return true
  }

  // 上传文件改变时触发
  function onChange (status) {
    console.log('change', status, status.file.response, status.fileList, status.file.status)
    if (status.file.status === 'done') {
      setDisabled(false)
      message.success('上传成功！')
      // todo: 下载地址由接口返回
      // status.fileList[0].url = status.file.response.data.url
      setFileList(status.fileList)
    }
    if (status.file.status === 'error') {
      setDisabled(false)
      message.error('上传失败！')
    }
    if (status.file.status === 'removed') {
      setFileList(status.fileList)
      setDisabled(false)
      message.success('移除成功！', 1)
    }
    if (status.file.status === 'uploading') {
      setDisabled(true)
    }
  }

  /**
   * 资源下载 具备以下条件时自动执行
   * @param {*} file @UploadFile
   * 必填项
   * status: 'done'
   * url: 下载地址
   * name: 文件名称
   */
  function download (file) {
    // todo: 自定义资源下载
    console.log(1111, file)
  }
}
