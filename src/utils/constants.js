export const JUDGE_STATUS = {
  '-2': {
    name: '编译错误',
    short: 'CE',
    color: 'yellow',
    type: 'warning'
  },
  '-1': {
    name: '答案错误',
    short: 'WA',
    color: 'red',
    type: 'error'
  },
  '0': {
    name: '通过',
    short: 'AC',
    color: 'green',
    type: 'success'
  },
  '1': {
    name: '时间超限',
    short: 'TLE',
    color: 'red',
    type: 'error'
  },
  '2': {
    name: '时间超限',
    short: 'TLE',
    color: 'red',
    type: 'error'
  },
  '3': {
    name: '内存超限',
    short: 'MLE',
    color: 'red',
    type: 'error'
  },
  '4': {
    name: '运行时错误',
    short: 'RE',
    color: 'red',
    type: 'error'
  },
  '5': {
    name: '系统错误',
    short: 'SE',
    color: 'red',
    type: 'error'
  },
  '6': {
    name: '等待评测',
    color: 'yellow',
    type: 'warning'
  },
  '7': {
    name: '评测中',
    color: 'blue',
    type: 'info'
  },
  '8': {
    name: '部分通过',
    short: 'PAC',
    color: 'blue',
    type: 'info'
  },
  '9': {
    name: '提交中',
    color: 'yellow',
    type: 'warning'
  }
}

export const CONTEST_STATUS = {
  'NOT_START': '1',
  'UNDERWAY': '0',
  'ENDED': '-1'
}

export const CONTEST_STATUS_REVERSE = {
  '1': {
    name: '未开始',
    color: 'yellow'
  },
  '0': {
    name: '进行中',
    color: 'green'
  },
  '-1': {
    name: '已结束',
    color: 'red'
  }
}

export const RULE_TYPE = {
  ACM: 'ACM',
  OI: 'OI'
}

export const CONTEST_TYPE = {
  PUBLIC: '公开',
  PRIVATE: '密码保护'
}

export const USER_TYPE = {
  REGULAR_USER: '普通用户',
  ADMIN: '管理员',
  SUPER_ADMIN: '超级管理员'
}

export const PROBLEM_PERMISSION = {
  NONE: '无权限',
  OWN: '自己的',
  ALL: '全部'
}

export const STORAGE_KEY = {
  AUTHED: 'authed',
  PROBLEM_CODE: 'problemCode',
  languages: 'languages'
}

export function buildProblemCodeKey (problemID, contestID = null) {
  if (contestID) {
    return `${STORAGE_KEY.PROBLEM_CODE}_${contestID}_${problemID}`
  }
  return `${STORAGE_KEY.PROBLEM_CODE}_NaN_${problemID}`
}

export const GOOGLE_ANALYTICS_ID = 'UA-111499601-1'
