module.exports = Object.freeze({
  "Login": {
    "type": "get",
    "input": {
      "message": "LOGIN_REQ2"
    },
    "output": {
      "message": "LOGIN_RES2"
    }
  },
  "ForceLogout": {
    "type": "get",
    "input": {
      "message": "FORCELOGOUT_REQ"
    },
    "output": {
      "message": "FORCELOGOUT_RSP"
    }
  },
  "KeepAlive": {
    "type": "command",
    "input": {
      "message": "KEEPALIVE_REQ"
    },
    "output": {
      "message": "KEEPALIVE_RSP"
    }
  },
  "SysInfo": {
    "type": "get",
    "input": {
      "message": "SYSINFO_REQ"
    },
    "output": {
      "message": "SYSINFO_RSP"
    }
  },
  "ConfigSet": {
    "type": "set",
    "input": {
      "message": "CONFIG_SET"
    },
    "output": {
      "message": "CONFIG_SET_RSP"
    }
  },
  "ConfigGet": {
    "type": "get",
    "input": {
      "message": "CONFIG_GET"
    },
    "output": {
      "message": "CONFIG_GET_RSP"
    }
  },
  "DafeultConfig": {
    "type": "set",
    "input": {
      "message": "DEFAULT_CONFIG_GET"
    },
    "output": {
      "message": "DEFAULT_CONFIG_GET_RSP"
    }
  },
  "ConfigChannelGet": {
    "type": "get",
    "input": {
      "message": "CONFIG_CHANNELTITLE_GET"
    },
    "output": {
      "message": "CONFIG_CHANNELTITLE_GET_RSP"
    }
  },
  "ConfigChannelSet": {
    "type": "set",
    "input": {
      "message": "CONFIG_CHANNELTITLE_SET"
    },
    "output": {
      "message": "CONFIG_CHANNELTITLE_SET_RSP"
    }
  },
  "ConfigChannelDot": {
    "type": "set",
    "input": {
      "message": "CONFIG_CHANNELTITLE_DOT_SET"
    },
    "output": {
      "message": "CONFIG_CHANNELTITLE_DOT_SET_RSP"
    }
  },
  "Debug": {
    "type": "set",
    "input": {
      "message": "SYSTEM_DEBUG_REQ"
    },
    "output": {
      "message": "SYSTEM_DEBUG_RSP"
    }
  },
  "Ability": {
    "type": "get",
    "input": {
      "message": "ABILITY_GET"
    },
    "output": {
      "message": "ABILITY_GET_RSP"
    }
  },
  "ChannelAbility": {
    "type": "get",
    "input": {
      "message": "CHANNEL_ABILITY_GET"
    },
    "output": {
      "message": "CHANNEL_ABILITY_GET_RSP"
    }
  },
  "Ptz": {
    "type": "set",
    "input": {
      "message": "PTZ_REQ"
    },
    "output": {
      "message": "PTZ_RSP"
    }
  },
  "FileSearch": {
    "type": "method",
    "input": {
      "message": "FILESEARCH_REQ"
    },
    "output": {
      "message": "FILESEARCH_RSP"
    }
  },
  "LogSearch": {
    "type": "method",
    "input": {
      "message": "LOGSEARCH_REQ"
    },
    "output": {
      "message": "LOGSEARCH_RSP"
    }
  },
  "FileSearchByTime": {
    "type": "method",
    "input": {
      "message": "FILESEARCH_BYTIME_REQ"
    },
    "output": {
      "message": "FILESEARCH_BYTIME_RSP"
    }
  },
  "SysManager": {
    "type": "set",
    "input": {
      "message": "SYSMANAGER_REQ"
    },
    "output": {
      "message": "SYSMANAGER_RSP"
    }
  },
  "TimeQuery": {
    "type": "get",
    "input": {
      "message": "TIMEQUERY_REQ"
    },
    "output": {
      "message": "TIMEQUERY_RSP"
    }
  },
  "DiskManager": {
    "type": "set",
    "input": {
      "message": "DISKMANAGER_REQ"
    },
    "output": {
      "message": "DISKMANAGER_RSP"
    }
  },
  "Authority": {
    "type": "get",
    "input": {
      "message": "FULLAUTHORITYLIST_GET"
    },
    "output": {
      "message": "FULLAUTHORITYLIST_GET_RSP"
    }
  },
  "Users": {
    "type": "get",
    "input": {
      "message": "USERS_GET"
    },
    "output": {
      "message": "USERS_GET_RSP"
    }
  },
  "Groups": {
    "type": "get",
    "input": {
      "message": "GROUPS_GET"
    },
    "output": {
      "message": "GROUPS_GET_RSP"
    }
  },
  "AddGroup": {
    "type": "command",
    "input": {
      "message": "ADDGROUP_REQ"
    },
    "output": {
      "message": "ADDGROUP_RSP"
    }
  },
  "ModifyGroup": {
    "type": "command",
    "input": {
      "message": "MODIFYGROUP_REQ"
    },
    "output": {
      "message": "MODIFYGROUP_RSP"
    }
  },
  "DeleteGroup": {
    "type": "command",
    "input": {
      "message": "DELETEGROUP_REQ"
    },
    "output": {
      "message": "DELETEGROUP_RSP"
    }
  },
  "AddUser": {
    "type": "command",
    "input": {
      "message": "ADDUSER_REQ"
    },
    "output": {
      "message": "ADDUSER_RSP"
    }
  },
  "ModifyUser": {
    "type": "command",
    "input": {
      "message": "MODIFYUSER_REQ"
    },
    "output": {
      "message": "MODIFYUSER_RSP"
    }
  },
  "DeleteUser": {
    "type": "command",
    "input": {
      "message": "DELETEUSER_REQ"
    },
    "output": {
      "message": "DELETEUSER_RSP"
    }
  },
  "ModifyPassword": {
    "type": "command",
    "input": {
      "message": "MODIFYPASSWORD_REQ"
    },
    "output": {
      "message": "MODIFYPASSWORD_RSP"
    }
  },
  "Guard": {
    "type": "unknown",
    "input": {
      "message": "GUARD_REQ"
    },
    "output": {
      "message": "GUARD_RSP"
    }
  },
  "Unguard": {
    "type": "unknown",
    "input": {
      "message": "UNGUARD_REQ"
    },
    "output": {
      "message": "UNGUARD_RSP"
    }
  },
  "Alarm": {
    "type": "method",
    "input": {
      "message": "ALARM_REQ"
    },
    "output": {
      "message": "ALARM_RSP"
    }
  },
  "NetAlarm": {
    "type": "unknown",
    "input": {
      "message": "NET_ALARM_REQ"
    },
    "output": {
      "message": "NET_ALARM_REQ2"
    }
  },
  "AlarmCenter": {
    "type": "command",
    "input": {
      "message": "ALARMCENTER_MSG_REQ"
    }
  },
  "Upgrade": {
    "type": "set",
    "input": {
      "message": "UPGRADE_REQ"
    },
    "output": {
      "message": "UPGRADE_RSP"
    }
  },
  "UpgradeData": {
    "type": "set",
    "input": {
      "message": "UPGRADE_DATA"
    },
    "output": {
      "message": "UPGRADE_DATA_RSP"
    }
  },
  "UpgradeProgress": {
    "type": "event",
    "output": {
      "message": "UPGRADE_PROGRESS"
    }
  },
  "UpgradeInfo": {
    "type": "set",
    "input": {
      "message": "UPGRADE_INFO_REQ"
    },
    "output": {
      "message": "UPGRADE_INFO_RSQ"
    }
  },
  "IPSearch": {
    "type": "set",
    "input": {
      "message": "IPSEARCH_REQ"
    },
    "output": {
      "message": "IPSEARCH_RSP"
    }
  },
  "ConfigIPSetmport": {
    "type": "set",
    "input": {
      "message": "IP_SET_REQ"
    },
    "output": {
      "message": "IP_SET_RSP"
    }
  },
  "ConfigImport": {
    "type": "set",
    "input": {
      "message": "CONFIG_IMPORT_REQ"
    },
    "output": {
      "message": "CONFIG_IMPORT_RSP"
    }
  },
  "ConfigExport": {
    "type": "set",
    "input": {
      "message": "CONFIG_EXPORT_REQ"
    },
    "output": {
      "message": "CONFIG_EXPORT_RSP"
    }
  },
  "LogExport": {
    "type": "set",
    "input": {
      "message": "LOG_EXPORT_REQ"
    },
    "output": {
      "message": "LOG_EXPORT_RSP"
    }
  },
  "NetKeyboard": {
    "type": "unknown",
    "input": {
      "message": "NET_KEYBOARD_REQ"
    },
    "output": {
      "message": "NET_KEYBOARD_RSP"
    }
  },
  "NetSnap": {
    "type": "unknown",
    "input": {
      "message": "NET_SNAP_REQ"
    },
    "output": {
      "message": "NET_SNAP_RSP"
    }
  },
  "SetIFrame": {
    "type": "set",
    "input": {
      "message": "SET_IFRAME_REQ"
    },
    "output": {
      "message": "SET_IFRAME_RSP"
    }
  },
  "RS232Read": {
    "type": "get",
    "input": {
      "message": "RS232_READ_REQ"
    },
    "output": {
      "message": "RS232_READ_RSP"
    }
  },
  "RS232Write": {
    "type": "set",
    "input": {
      "message": "RS232_WRITE_REQ"
    },
    "output": {
      "message": "RS232_WRITE_RSP"
    }
  },
  "RS485Read": {
    "type": "get",
    "input": {
      "message": "RS485_READ_REQ"
    },
    "output": {
      "message": "RS485_READ_RSP"
    }
  },
  "RS485Write": {
    "type": "set",
    "input": {
      "message": "RS485_WRITE_REQ"
    },
    "output": {
      "message": "RS485_WRITE_RSP"
    }
  },
  "TransparentCom": {
    "type": "unknown",
    "input": {
      "message": "TRANSPARENT_COMM_REQ"
    },
    "output": {
      "message": "TRANSPARENT_COMM_RSP"
    }
  },
  "RS485Transparent": {
    "type": "unknown",
    "input": {
      "message": "RS485_TRANSPARENT_DATA_REQ"
    },
    "output": {
      "message": "RS485_TRANSPARENT_DATA_RSP"
    }
  },
  "RS232Transparent": {
    "type": "unknown",
    "input": {
      "message": "RS232_TRANSPARENT_DATA_REQ"
    },
    "output": {
      "message": "RS232_TRANSPARENT_DATA_RSP"
    }
  },
  "TimeSync": {
    "type": "set",
    "input": {
      "message": "SYNC_TIME_REQ"
    },
    "output": {
      "message": "SYNC_TIME_RSP"
    }
  },
  "Photo": {
    "type": "get",
    "input": {
      "message": "PHOTO_GET_REQ"
    },
    "output": {
      "message": "PHOTO_GET_RSP"
    }
  },
  "Update": {
    "type": "get",
    "input": {
      "message": "UPDATE_REQ"
    },
    "output": {
      "message": "UPDATE_RES"
    }
  },
  "FTPTest": {
    "type": "set",
    "input": {
      "message": "FTP_TEST_REQ"
    },
    "output": {
      "message": "FTP_TEST_RES"
    }
  }
})
