import request from '@/utils/request'

// 获取素材库的搜索项
export const getSearchOptions = _ =>
  request({
    method: 'get',
    url: 'searchOptions'
  })

// 条件获取搜索素材库资源
export const postSearch = data =>
  request({
    method: 'post',
    url: 'search',
    data
  })

// 获取指定资源的封面图
export const getPreview = params =>
  request({
    method: 'get',
    url: 'preview',
    params
  })
