//const MessageIds = require('./MessageIds');

const Operations = Object.freeze([{
    name: 'Login',
    type: 'get',
    input: { message: 'LOGIN_REQ2' },
    output: { message: 'LOGIN_RES2' },
    commands: { }
  }, {
    name: 'Logout',
    type: 'get',
    input: { message: 'LOGOUT_REQ' },
    output: { message: 'LOGOUT_RSP' },
    commands: { }
  }, {
    name: 'ForceLogout',
    type: 'get',
    input: { message: 'FORCELOGOUT_REQ' },
    output: { message: 'FORCELOGOUT_RSP' },
    commands: { }
  }, {
    name: 'KeepAlive',
    type: 'ping',
    input: { message: 'KEEPALIVE_REQ' },
    output: { message: 'KEEPALIVE_RSP' },
    commands: { }
  }, {
    name: 'SysInfo',
    type: 'get',
    input: { message: 'SYSINFO_REQ' },
    output: { message: 'SYSINFO_RSP' },
    commands: { }
  }, {
    name: 'ConfigSet',
    input: { message: 'CONFIG_SET' },
    output: { message: 'CONFIG_SET_RSP' },
  }, {
    name: 'ConfigGet',
    type: 'get',
    input: { message: 'CONFIG_GET' },
    output: { message: 'CONFIG_GET_RSP' },
  }, {
    name: 'DafeultConfig',
    type: 'set',
    input: { message: 'DEFAULT_CONFIG_GET' },
    output: { message: 'DEFAULT_CONFIG_GET_RSP' },
  }, {
    name: 'ConfigChannel',
    type: 'set',
    input: { message: 'CONFIG_CHANNELTITLE_SET' },
    output: { message: 'CONFIG_CHANNELTITLE_SET_RSP' },
  }, {
    name: 'ConfigChannel',
    type: 'get',
    input: { message: 'CONFIG_CHANNELTITLE_GET' },
    output: { message: 'CONFIG_CHANNELTITLE_GET_RSP' },
  }, {
    name: 'ConfigChannelDot',
    type: 'set',
    input: { message: 'CONFIG_CHANNELTITLE_DOT_SET' },
    output: { message: 'CONFIG_CHANNELTITLE_DOT_SET_RSP' },
  }, {
    name: 'Debug',
    type: 'unknown',
    get: {
      input: { message: 'SYSTEM_DEBUG_REQ' },
      output: { message: 'SYSTEM_DEBUG_RSP' },
    },
  }, {
    name: 'Ability',
    get: {
      input: { message: 'ABILITY_GET' },
      output: { message: 'ABILITY_GET_RSP' },
    },
  }, {
    name: 'ChannelAbility',
    get: {
      input: { message: 'CHANNEL_ABILITY_GET' },
      output: { message: 'CHANNEL_ABILITY_GET_RSP' },
    },
  }, {
    name: 'Ptz',
    type: 'set',
    input: { message: 'PTZ_REQ' },
    output: { message: 'PTZ_RSP' },
/*
	MONITOR_REQ: 1410,
	MONITOR_RSP: 1411,
	MONITOR_DATA: 1412,
	MONITOR_CLAIM: 1413,
	MONITOR_CLAIM_RSP: 1414,

	PLAY_REQ: 1420,
	PLAY_RSP: 1421,
	PLAY_DATA: 1422,
	PLAY_EOF: 1423,
	PLAY_CLAIM: 1424,
	PLAY_CLAIM_RSP: 1425,
	DOWNLOAD_DATA: 1426,

	TALK_REQ: 1430,
	TALK_RSP: 1431,
	TALK_CU_PU_DATA: 1432,
	TALK_PU_CU_DATA: 1433,
	TALK_CLAIM: 1434,
	TALK_CLAIM_RSP: 1435,

	FILESEARCH_REQ: 1440,
	FILESEARCH_RSP: 1441,
	LOGSEARCH_REQ: 1442,
	LOGSEARCH_RSP: 1443,
	FILESEARCH_BYTIME_REQ: 1444,
	FILESEARCH_BYTIME_RSP: 1445,
*/
   }, {
    name: 'SysManager',
    type: 'set',
    input: { message: 'SYSMANAGER_REQ' },
    output: { message: 'SYSMANAGER_RSP' },
  }, {
    name: 'TimeQuery',
    type: 'get',
    input: { message: 'TIMEQUERY_REQ' },
    output: { message: 'TIMEQUERY_RSP' },
  }, {
    name: 'DiskManager',
    type: 'set',
    input: { message: 'DISKMANAGER_REQ' },
    output: { message: 'DISKMANAGER_RSP' },
  }, {
    name: 'Authority',
    type: 'get',
    input: { message: 'FULLAUTHORITYLIST_GET' },
    output: { message: 'FULLAUTHORITYLIST_GET_RSP' },
  }, {
    name: 'Users',
    type: 'get',
    input: { message: 'USERS_GET' },
    output: { message: 'USERS_GET_RSP' },
  }, {
    name: 'Groups',
    type: 'get',
    input: { message: 'GROUPS_GET' },
    output: { message: 'GROUPS_GET_RSP' },
  }, {
    name: 'AddGroup',
    set: {
      input: { message: 'ADDGROUP_REQ' },
      output: { message: 'ADDGROUP_RSP' },
    },
  }, {
    name: 'ModifyGroup',
    type: 'set',
    input: { message: 'MODIFYGROUP_REQ' },
    output: { message: 'MODIFYGROUP_RSP' },
  }, {
    name: 'DeleteGroup',
    type: 'set',
    input: { message: 'DELETEGROUP_REQ' },
    output: { message: 'DELETEGROUP_RSP' },
  }, {
    name: 'AddUser',
    type: 'set',
    input: { message: 'ADDUSER_REQ' },
    output: { message: 'ADDUSER_RSP' }
  }, {
    name: 'ModifyUser',
    type: 'set',
    input: { message: 'MODIFYUSER_REQ' },
    output: { message: 'MODIFYUSER_RSP' }
  }, {
    name: 'DeleteUser',
    type: 'set',
    input: { message: 'DELETEUSER_REQ' },
    output: { message: 'DELETEUSER_RSP' }
  }, {
    name: 'ModifyPassword',
    type: 'set',
    input: { message: 'MODIFYPASSWORD_REQ' },
    output: { message: 'MODIFYPASSWORD_RSP' }
/*
  }, {
	GUARD_REQ: 1500,
	GUARD_RSP: 1501,
	UNGUARD_REQ: 1502,
	UNGUARD_RSP: 1503,
	ALARM_REQ: 1504,
	ALARM_RSP: 1505,
	NET_ALARM_REQ: 1506,
	NET_ALARM_REQ2: 1507,
	ALARMCENTER_MSG_REQ: 1508,
*/
//---------
  }, {
    name: 'Upgrade',
    type: 'set',
    input: { message: 'UPGRADE_REQ' },
    output: { message: 'UPGRADE_RSP' }
  }, {
    name: 'UpgradeData',
    type: 'set',
    input: { message: 'UPGRADE_DATA' },
    output: { message: 'UPGRADE_DATA_RSP' }
  }, {
    name: 'UpgradeProgress',
    type: 'event',
    output: { message: 'IPSEARCH_RSP' }
  }, {
    name: 'UpgradeInfo',
    type: 'set',
    input: { message: 'UPGRADE_INFO_REQ' },
    output: { message: 'UPGRADE_INFO_RSQ' }
  }, {
    name: 'IPSearch',
    type: 'set',
    input: { message: 'IPSEARCH_REQ' },
    output: { message: 'IPSEARCH_RSP' }
  }, {
    name: 'ConfigIPSetmport',
    type: 'set',
    input: { message: 'IP_SET_REQ' },
    output: { message: 'IP_SET_RSP' }
  }, {
    name: 'ConfigImport',
    type: 'set',
    input: { message: 'CONFIG_IMPORT_REQ' },
    output: { message: 'CONFIG_IMPORT_RSP' }
  }, {
    name: 'ConfigExport',
    type: 'set',
    input: { message: 'CONFIG_EXPORT_REQ' },
    output: { message: 'CONFIG_EXPORT_RSP' }
  }, {
    name: 'LogExport',
    type: 'set',
    input: { message: 'LOG_EXPORT_REQ' },
    output: { message: 'LOG_EXPORT_RSP' }
  }, {
    name: 'NetKeyboard',
    type: 'unknown',
    input: { message: 'NET_KEYBOARD_REQ' },
    output: { message: 'NET_KEYBOARD_RSP' }
  }, {
    name: 'NetSnap',
    type: 'unknown',
    input: { message: 'NET_SNAP_REQ' },
    output: { message: 'NET_SNAP_RSP' }
  }, {
    name: 'SetIFrame',
    type: 'set',
    input: { message: 'SET_IFRAME_REQ' },
    output: { message: 'SET_IFRAME_RSP' }
  }, {
    name: 'RS232Read',
    type: 'get',
    input: { message: 'RS232_READ_REQ' },
    output: { message: 'RS232_READ_RSP' }
  }, {
    name: 'RS232Write',
    type: 'set',
    input: { message: 'RS232_WRITE_REQ' },
    output: { message: 'RS232_WRITE_RSP' }
  }, {
    name: 'RS485Read',
    type: 'get',
    input: { message: 'RS485_READ_REQ' },
    output: { message: 'RS485_READ_RSP' }
  }, {
    name: 'RS485Write',
    type: 'set',
    input: { message: 'RS485_WRITE_REQ' },
    output: { message: 'RS485_WRITE_RSP' }
  }, {
    name: 'TransparentCom',
    type: 'unknown',
    input: { message: 'TRANSPARENT_COMM_REQ' },
    output: { message: 'TRANSPARENT_COMM_RSP' }
  }, {
    name: 'RS485Transparent',
    type: 'unknown',
    input: { message: 'RS485_TRANSPARENT_DATA_REQ' },
    output: { message: 'RS485_TRANSPARENT_DATA_RSP' }
  }, {
    name: 'RS232Transparent',
    type: 'unknown',
    input: { message: 'RS232_TRANSPARENT_DATA_REQ' },
    output: { message: 'RS232_TRANSPARENT_DATA_RSP' }
  }, {
    name: 'TimeSync',
    type: 'set',
    input: { message: 'SYNC_TIME_REQ' },
    output: { message: 'SYNC_TIME_RSP' }
  }, {
    name: 'Photo',
    type: 'get',
    input: { message: 'PHOTO_GET_REQ' },
    output: { message: 'PHOTO_GET_RSP' }
  }, {
    name: 'Update',
    type: 'get',
    input: { message: 'UPDATE_REQ' },
    output: { message: 'UPDATE_RES' },
  }
])

module.exports = Operations