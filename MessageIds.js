module.exports = Object.freeze({
	// LOGIN_REQ1: 999,
	LOGIN_REQ2: 1000,
	LOGIN_RES2: 1001,
	// LOGIN_RSP: 1000,
	// LOGOUT_REQ: 1001,
	// LOGOUT_RSP: 1002,
	FORCELOGOUT_REQ: 1003,
	FORCELOGOUT_RSP: 1004,
	KEEPALIVE_REQ: 1006, // 1005
	KEEPALIVE_RSP: 1007, // 1006

	SYSINFO_REQ: 1020,
	SYSINFO_RSP: 1021,

	CONFIG_SET: 1040,
	CONFIG_SET_RSP: 1041,
	CONFIG_GET: 1042,
	CONFIG_GET_RSP: 1043,
	DEFAULT_CONFIG_GET: 1044,
	DEFAULT_CONFIG_GET_RSP: 1045,
	CONFIG_CHANNELTITLE_SET: 1046,
	CONFIG_CHANNELTITLE_SET_RSP: 1047,
	CONFIG_CHANNELTITLE_GET: 1048,
	CONFIG_CHANNELTITLE_GET_RSP: 1049,
	CONFIG_CHANNELTITLE_DOT_SET: 1050,
	CONFIG_CHANNELTITLE_DOT_SET_RSP: 1051,

	SYSTEM_DEBUG_REQ: 1052,
	SYSTEM_DEBUG_RSP: 1053,

	ABILITY_GET: 1360,
	ABILITY_GET_RSP: 1361,
	CHANNEL_ABILITY_GET: 1362,
	CHANNEL_ABILITY_GET_RSP: 1363,

	PTZ_REQ: 1400,
	PTZ_RSP: 1401,

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

	SYSMANAGER_REQ: 1450,
	SYSMANAGER_RSP: 1451,
	TIMEQUERY_REQ: 1452,
	TIMEQUERY_RSP: 1453,

	DISKMANAGER_REQ: 1460,
	DISKMANAGER_RSP: 1461,

	FULLAUTHORITYLIST_GET: 1470,
	FULLAUTHORITYLIST_GET_RSP: 1471,
	USERS_GET: 1472,
	USERS_GET_RSP: 1473,
	GROUPS_GET: 1474,
	GROUPS_GET_RSP: 1475,
	ADDGROUP_REQ: 1476,
	ADDGROUP_RSP: 1477,
	MODIFYGROUP_REQ: 1478,
	MODIFYGROUP_RSP: 1479,
	DELETEGROUP_REQ: 1480,
	DELETEGROUP_RSP: 1481,
	ADDUSER_REQ: 1482,
	ADDUSER_RSP: 1483,
	MODIFYUSER_REQ: 1484,
	MODIFYUSER_RSP: 1485,
	DELETEUSER_REQ: 1486,
	DELETEUSER_RSP: 1487,
	MODIFYPASSWORD_REQ: 1488,
	MODIFYPASSWORD_RSP: 1489,

	GUARD_REQ: 1500,
	GUARD_RSP: 1501,
	UNGUARD_REQ: 1502,
	UNGUARD_RSP: 1503,
	ALARM_REQ: 1504,
	ALARM_RSP: 1505,
	NET_ALARM_REQ: 1506,
	NET_ALARM_REQ2: 1507,
	ALARMCENTER_MSG_REQ: 1508,

	UPGRADE_REQ: 1520,
	UPGRADE_RSP: 1521,
	UPGRADE_DATA: 1522,
	UPGRADE_DATA_RSP: 1523,
	UPGRADE_PROGRESS: 1524,
	UPGRADE_INFO_REQ: 1525,
	UPGRADE_INFO_RSQ: 1526,

	IPSEARCH_REQ: 1530,
	IPSEARCH_RSP: 1531,
	IP_SET_REQ: 1532,
	IP_SET_RSP: 1533,

	CONFIG_IMPORT_REQ: 1540,
	CONFIG_IMPORT_RSP: 1541,
	CONFIG_EXPORT_REQ: 1542,
	CONFIG_EXPORT_RSP: 1543,
	LOG_EXPORT_REQ: 1544, //CONDIG_EXPORT_REQ
	LOG_EXPORT_RSP: 1545, //CONFIG_EXPORT_RSP

	NET_KEYBOARD_REQ: 1550,
	NET_KEYBOARD_RSP: 1551,

	NET_SNAP_REQ: 1560,
	NET_SNAP_RSP: 1561,
	SET_IFRAME_REQ: 1562,
	SET_IFRAME_RSP: 1563,

	RS232_READ_REQ: 1570,
	RS232_READ_RSP: 1571,
	RS232_WRITE_REQ: 1572,
	RS232_WRITE_RSP: 1573,
	RS485_READ_REQ: 1574,
	RS485_READ_RSP: 1575,
	RS485_WRITE_REQ: 1576,
	RS485_WRITE_RSP: 1577,
	TRANSPARENT_COMM_REQ: 1578,
	TRANSPARENT_COMM_RSP: 1579,
	RS485_TRANSPARENT_DATA_REQ: 1580,
	RS485_TRANSPARENT_DATA_RSP: 1581,
	RS232_TRANSPARENT_DATA_REQ: 1582,
	RS232_TRANSPARENT_DATA_RSP: 1583,

	SYNC_TIME_REQ: 1590,
	SYNC_TIME_RSP: 1591,

	PHOTO_GET_REQ: 1600,
  PHOTO_GET_RSP: 1601,
  
  UPDATE_REQ: 2000,
  UPDATE_RES: 2001,

  FTP_TEST_REQ: 2008,
  FTP_TEST_RES: 2009,
})