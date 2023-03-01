module.exports = Object.freeze({
  "LOGIN_REQ2": {
    "id": 1000,
    "type": "object",
    "properties": {
      "CommunicateKey": {
        "type": "string"
      },
      "EncryptType": {
        "type": "string"
      },
      "LoginType": {
        "type": "string"
      },
      "PassWord": {
        "type": "string"
      },
      "UserName": {
        "type": "string"
      }
    }
  },
  "LOGIN_RES2": {
    "id": 1001,
    "type": "object",
    "properties": {
      "AliveInterval": {
        "type": "number"
      },
      "ChannelNum": {
        "type": "number"
      },
      "DeviceType ": {
        "type": "string"
      },
      "ExtraChannel": {
        "type": "number"
      }
    }
  },
  "FORCELOGOUT_REQ": {
    "id": 1003
  },
  "FORCELOGOUT_RSP": {
    "id": 1004
  },
  "KEEPALIVE_REQ": {
    "id": 1006,
    "commands": {
      "KeepAlive": {
        "type": "null"
      }
    }
  },
  "KEEPALIVE_RSP": {
    "id": 1007,
    "commands": {
      "KeepAlive": {
        "type": "null"
      }
    }
  },
  "SYSINFO_REQ": {
    "id": 1020,
    "commands": {
      "StorageInfo": {
        "type": "null"
      },
      "SystemInfo": {
        "type": "null"
      },
      "WorkState": {
        "type": "null"
      }
    }
  },
  "SYSINFO_RSP": {
    "id": 1021,
    "commands": {
      "StorageInfo": {
        "type": "array",
        "element": {
          "type": "object",
          "properties": {
            "PartNumber": {
              "type": "number"
            },
            "Partition": {
              "type": "array",
              "element": {
                "type": "object",
                "properties": {
                  "DirverType": {
                    "type": "number"
                  },
                  "IsCurrent": {
                    "type": "boolean"
                  },
                  "LogicSerialNo": {
                    "type": "number"
                  },
                  "NewEndTime": {
                    "type": "string"
                  },
                  "NewStartTime": {
                    "type": "string"
                  },
                  "OldEndTime": {
                    "type": "string"
                  },
                  "OldStartTime": {
                    "type": "string"
                  },
                  "RemainSpace": {
                    "type": "string"
                  },
                  "Status": {
                    "type": "number"
                  },
                  "TotalSpace": {
                    "type": "string"
                  },
                  "fsType": {
                    "type": "string"
                  }
                }
              }
            },
            "PlysicalNo": {
              "type": "number"
            }
          }
        }
      },
      "SystemInfo": {
        "type": "object",
        "properties": {
          "AlarmInChannel": {
            "type": "number"
          },
          "AlarmOutChannel": {
            "type": "number"
          },
          "AudioInChannel": {
            "type": "number"
          },
          "BuildTime": {
            "type": "string"
          },
          "CombineSwitch": {
            "type": "number"
          },
          "DeviceModel": {
            "type": "string"
          },
          "DeviceRunTime": {
            "type": "string"
          },
          "DeviceType": {
            "type": "number"
          },
          "DigChannel": {
            "type": "number"
          },
          "EncryptVersion": {
            "type": "string"
          },
          "ExtraChannel": {
            "type": "number"
          },
          "HardWare": {
            "type": "string"
          },
          "HardWareVersion": {
            "type": "string"
          },
          "SerialNo": {
            "type": "string"
          },
          "SoftWareVersion": {
            "type": "string"
          },
          "TalkInChannel": {
            "type": "number"
          },
          "TalkOutChannel": {
            "type": "number"
          },
          "UpdataTime": {
            "type": "string"
          },
          "UpdataType": {
            "type": "string"
          },
          "VideoInChannel": {
            "type": "number"
          },
          "VideoOutChannel": {
            "type": "number"
          }
        }
      },
      "WorkState": {
        "type": "object",
        "properties": {
          "AlarmState": {
            "type": "object",
            "properties": {
              "AlarmIn": {
                "type": "string"
              },
              "AlarmOut": {
                "type": "string"
              },
              "VideoBlind": {
                "type": "string"
              },
              "VideoLoss": {
                "type": "string"
              },
              "VideoMotion": {
                "type": "string"
              }
            }
          },
          "ChannelState": {
            "type": "array",
            "element": {
              "type": "object",
              "properties": {
                "Bitrate": {
                  "type": "number"
                },
                "Record": {
                  "type": "boolean"
                }
              }
            }
          }
        }
      }
    }
  },
  "CONFIG_SET": {
    "id": 1040,
    "commands": {
      "AVEnc.EncodeStaticParam": {
        "type": "array",
        "element": {
          "type": "object",
          "properties": {
            "Level": {
              "type": "number"
            },
            "Profile": {
              "type": "number"
            }
          }
        }
      },
      "Alarm.AlarmOut": {
        "type": "array",
        "element": {
          "type": "object",
          "properties": {
            "AlarmOutStatus": {
              "type": "string"
            },
            "AlarmOutType": {
              "type": "string"
            }
          }
        }
      },
      "BrowserLanguage": {
        "type": "object",
        "properties": {
          "BrowserLanguageType": {
            "type": "number"
          }
        }
      },
      "General.General": {
        "type": "object",
        "properties": {
          "AutoLogout": {
            "type": "number"
          },
          "FontSize": {
            "type": "number"
          },
          "IranCalendarEnable": {
            "type": "number"
          },
          "LocalNo": {
            "type": "number"
          },
          "MachineName": {
            "type": "string"
          },
          "OverWrite": {
            "type": "string"
          },
          "ScreenAutoShutdown": {
            "type": "number"
          },
          "ScreenSaveTime": {
            "type": "number"
          },
          "VideoOutPut": {
            "type": "string"
          }
        }
      },
      "General.Location": {
        "type": "object",
        "properties": {
          "DSTEnd": {
            "type": "object",
            "properties": {
              "Day": {
                "type": "number"
              },
              "Hour": {
                "type": "number"
              },
              "Minute": {
                "type": "number"
              },
              "Month": {
                "type": "number"
              },
              "Week": {
                "type": "number"
              },
              "Year": {
                "type": "number"
              }
            }
          },
          "DSTRule": {
            "type": "string"
          },
          "DSTStart": {
            "type": "object",
            "properties": {
              "Day": {
                "type": "number"
              },
              "Hour": {
                "type": "number"
              },
              "Minute": {
                "type": "number"
              },
              "Month": {
                "type": "number"
              },
              "Week": {
                "type": "number"
              },
              "Year": {
                "type": "number"
              }
            }
          },
          "DateFormat": {
            "type": "string"
          },
          "DateSeparator": {
            "type": "string"
          },
          "IranCalendar": {
            "type": "number"
          },
          "Language": {
            "type": "string"
          },
          "TimeFormat": {
            "type": "string"
          },
          "VideoFormat": {
            "type": "string"
          },
          "WorkDay": {
            "type": "number"
          }
        }
      },
      "NetWork.AlarmServer": {
        "type": "array",
        "element": {
          "type": "object",
          "properties": {
            "Alarm": {
              "type": "boolean"
            },
            "Enable": {
              "type": "boolean"
            },
            "Log": {
              "type": "boolean"
            },
            "Protocol": {
              "type": "string"
            },
            "Server": {
              "type": "object",
              "properties": {
                "Address": {
                  "type": "string"
                },
                "Anonymity": {
                  "type": "boolean"
                },
                "Name": {
                  "type": "string"
                },
                "Password": {
                  "type": "string"
                },
                "Port": {
                  "type": "number"
                },
                "UserName": {
                  "type": "string"
                }
              }
            }
          }
        }
      },
      "NetWork.DAS": {
        "type": "object",
        "properties": {
          "DeviceID": {
            "type": "string"
          },
          "Enable": {
            "type": "boolean"
          },
          "Password": {
            "type": "string"
          },
          "Port": {
            "type": "number"
          },
          "ServerAddr": {
            "type": "string"
          },
          "UserName": {
            "type": "string"
          }
        }
      },
      "NetWork.IPAdaptive": {
        "type": "object",
        "properties": {
          "IPAdaptive": {
            "type": "boolean"
          }
        }
      },
      "NetWork.Nat": {
        "type": "object",
        "properties": {
          "Addr": {
            "type": "string"
          },
          "DnsServer1": {
            "type": "string"
          },
          "DnsServer2": {
            "type": "string"
          },
          "NatEnable": {
            "type": "boolean"
          },
          "Port": {
            "type": "number"
          },
          "XMeyeMTU": {
            "type": "number"
          }
        }
      },
      "NetWork.NetARSP": {
        "type": "array",
        "element": {
          "type": "object",
          "properties": {
            "ARSPKey": {
              "type": "string"
            },
            "Enable": {
              "type": "boolean"
            },
            "HttpPort": {
              "type": "number"
            },
            "Interval": {
              "type": "number"
            },
            "Server": {
              "type": "object",
              "properties": {
                "Address": {
                  "type": "string"
                },
                "Anonymity": {
                  "type": "boolean"
                },
                "Name": {
                  "type": "string"
                },
                "Password": {
                  "type": "string"
                },
                "Port": {
                  "type": "number"
                },
                "UserName": {
                  "type": "string"
                }
              }
            },
            "URL": {
              "type": "string"
            }
          }
        }
      },
      "NetWork.NetCommon": {
        "type": "object",
        "properties": {
          "GateWay": {
            "type": "string"
          },
          "HostIP": {
            "type": "string"
          },
          "HostName": {
            "type": "string"
          },
          "HttpPort": {
            "type": "number"
          },
          "MAC": {
            "type": "string"
          },
          "MaxBps": {
            "type": "number"
          },
          "MonMode": {
            "type": "string"
          },
          "SSLPort": {
            "type": "number"
          },
          "Submask": {
            "type": "string"
          },
          "TCPMaxConn": {
            "type": "number"
          },
          "TCPPort": {
            "type": "number"
          },
          "TransferPlan": {
            "type": "string"
          },
          "UDPPort": {
            "type": "number"
          },
          "UseHSDownLoad": {
            "type": "boolean"
          }
        }
      },
      "NetWork.NetDDNS": {
        "type": "array",
        "element": {
          "type": "object",
          "properties": {
            "DDNSKey": {
              "type": "string"
            },
            "Enable": {
              "type": "boolean"
            },
            "HostName": {
              "type": "string"
            },
            "Online": {
              "type": "boolean"
            },
            "Server": {
              "type": "object",
              "properties": {
                "Address": {
                  "type": "string"
                },
                "Anonymity": {
                  "type": "boolean"
                },
                "Name": {
                  "type": "string"
                },
                "Password": {
                  "type": "string"
                },
                "Port": {
                  "type": "number"
                },
                "UserName": {
                  "type": "string"
                }
              }
            }
          }
        }
      },
      "NetWork.NetEmail": {
        "type": "object",
        "properties": {
          "Enable": {
            "type": "boolean"
          },
          "MailServer": {
            "type": "object",
            "properties": {
              "Address": {
                "type": "string"
              },
              "Anonymity": {
                "type": "boolean"
              },
              "Name": {
                "type": "string"
              },
              "Password": {
                "type": "string"
              },
              "Port": {
                "type": "number"
              },
              "UserName": {
                "type": "string"
              }
            }
          },
          "Recievers": {
            "type": "array",
            "element": {
              "type": "string"
            }
          },
          "Schedule": {
            "type": "array",
            "element": {
              "type": "string"
            }
          },
          "SendAddr": {
            "type": "string"
          },
          "Title": {
            "type": "string"
          },
          "UseSSL": {
            "type": "number"
          }
        }
      },
      "NetWork.NetFTP": {
        "type": "object",
        "properties": {
          "Directory": {
            "type": "string"
          },
          "Enable": {
            "type": "boolean"
          },
          "MaxFileLen": {
            "type": "number"
          },
          "Server": {
            "type": "object",
            "properties": {
              "Address": {
                "type": "string"
              },
              "Anonymity": {
                "type": "boolean"
              },
              "Name": {
                "type": "string"
              },
              "Password": {
                "type": "string"
              },
              "Port": {
                "type": "number"
              },
              "UserName": {
                "type": "string"
              }
            }
          }
        }
      },
      "NetWork.NetIPFilter": {
        "type": "object",
        "properties": {
          "Banned": {
            "type": "array",
            "element": {
              "type": "string"
            }
          },
          "Enable": {
            "type": "boolean"
          },
          "Trusted": {
            "type": "array",
            "element": {
              "type": "string"
            }
          }
        }
      },
      "NetWork.NetNTP": {
        "type": "object",
        "properties": {
          "Enable": {
            "type": "boolean"
          },
          "Server": {
            "type": "object",
            "properties": {
              "Address": {
                "type": "string"
              },
              "Anonymity": {
                "type": "boolean"
              },
              "Name": {
                "type": "string"
              },
              "Password": {
                "type": "string"
              },
              "Port": {
                "type": "number"
              },
              "UserName": {
                "type": "string"
              }
            }
          },
          "TimeZone": {
            "type": "number"
          },
          "UpdatePeriod": {
            "type": "number"
          }
        }
      },
      "NetWork.OnvifPwdCheckout": {
        "type": "object",
        "properties": {
          "Enable": {
            "type": "boolean"
          }
        }
      },
      "NetWork.PMS": {
        "type": "object",
        "properties": {
          "BoxID": {
            "type": "string"
          },
          "Enable": {
            "type": "boolean"
          },
          "Port": {
            "type": "number"
          },
          "ServName": {
            "type": "string"
          }
        }
      },
      "NetWork.RTSP": {
        "type": "object",
        "properties": {
          "Client": {
            "type": "object",
            "properties": {
              "Address": {
                "type": "string"
              },
              "Anonymity": {
                "type": "boolean"
              },
              "Name": {
                "type": "string"
              },
              "Password": {
                "type": "string"
              },
              "Port": {
                "type": "number"
              },
              "UserName": {
                "type": "string"
              }
            }
          },
          "IsClient": {
            "type": "boolean"
          },
          "IsServer": {
            "type": "boolean"
          },
          "Server": {
            "type": "object",
            "properties": {
              "Address": {
                "type": "string"
              },
              "Anonymity": {
                "type": "boolean"
              },
              "Name": {
                "type": "string"
              },
              "Password": {
                "type": "string"
              },
              "Port": {
                "type": "number"
              },
              "UserName": {
                "type": "string"
              }
            }
          }
        }
      },
      "NetWork.Upnp": {
        "type": "object",
        "properties": {
          "Enable": {
            "type": "boolean"
          },
          "HTTPPort": {
            "type": "number"
          },
          "MediaPort": {
            "type": "number"
          },
          "MobilePort": {
            "type": "number"
          },
          "State": {
            "type": "boolean"
          }
        }
      },
      "Storage.StoragePosition": {
        "type": "object",
        "properties": {
          "DVD": {
            "type": "boolean"
          },
          "SATA": {
            "type": "boolean"
          },
          "SD": {
            "type": "boolean"
          },
          "USB": {
            "type": "boolean"
          }
        }
      },
      "System.ExUserMap": {
        "type": "object",
        "properties": {
          "User": {
            "type": "array",
            "element": {
              "type": "object",
              "properties": {
                "AuthorityList": {
                  "type": "array",
                  "element": {
                    "type": "string"
                  }
                },
                "Group": {
                  "type": "string"
                },
                "Memo": {
                  "type": "string"
                },
                "Name": {
                  "type": "string"
                },
                "Password": {
                  "type": "string"
                },
                "Reserved": {
                  "type": "boolean"
                },
                "Sharable": {
                  "type": "boolean"
                }
              }
            }
          },
          "UserNum": {
            "type": "number"
          }
        }
      },
      "System.TimeZone": {
        "type": "object",
        "properties": {
          "FirstUserTimeZone": {
            "type": "number"
          },
          "timeMin": {
            "type": "number"
          }
        }
      }
    }
  },
  "CONFIG_SET_RSP": {
    "id": 1041,
    "type": "object",
    "properties": {
      "Name": {
        "type": "string"
      }
    }
  },
  "CONFIG_GET": {
    "id": 1042,
    "commands": {
      "AVEnc.EncodeStaticParam": {
        "type": "null"
      },
      "AVEnc.SmartH264V2.[0]": {
        "type": "null"
      },
      "Alarm.AlarmOut": {
        "type": "null"
      },
      "Alarm.LocalAlarm.[0]": {
        "type": "null"
      },
      "AppDowloadLink": {
        "type": "null"
      },
      "Detect.BlindDetect.[0]": {
        "type": "null"
      },
      "Detect.HumanDetection.[0]": {
        "type": "null"
      },
      "Detect.LossDetect.[0]": {
        "type": "null"
      },
      "Detect.MotionDetect.[0]": {
        "type": "null"
      },
      "General.AutoMaintain": {
        "type": "null"
      },
      "General.General": {
        "type": "null"
      },
      "General.Location": {
        "type": "null"
      },
      "General.PwdSafety": {
        "type": "null"
      },
      "NetWork.AlarmServer": {
        "type": "null"
      },
      "NetWork.DAS": {
        "type": "null"
      },
      "NetWork.DigManagerShow": {
        "type": "null"
      },
      "NetWork.IPAdaptive": {
        "type": "null"
      },
      "NetWork.Nat": {
        "type": "null"
      },
      "NetWork.NetARSP": {
        "type": "null"
      },
      "NetWork.NetCommon": {
        "type": "null"
      },
      "NetWork.NetDDNS": {
        "type": "null"
      },
      "NetWork.NetDHCP": {
        "type": "null"
      },
      "NetWork.NetDNS": {
        "type": "null"
      },
      "NetWork.NetEmail": {
        "type": "null"
      },
      "NetWork.NetFTP": {
        "type": "null"
      },
      "NetWork.NetIPFilter": {
        "type": "null"
      },
      "NetWork.NetNTP": {
        "type": "null"
      },
      "NetWork.OnvifPwdCheckout": {
        "type": "null"
      },
      "NetWork.PMS": {
        "type": "null"
      },
      "NetWork.RTSP": {
        "type": "null"
      },
      "NetWork.Upnp": {
        "type": "null"
      },
      "OEMcfg.Correspondent": {
        "type": "null"
      },
      "PMS.num": {
        "type": "null"
      },
      "Record.[0]": {
        "type": "null"
      },
      "Simplify.Encode": {
        "type": "null"
      },
      "Snap.SnapConfig.[0]": {
        "type": "null"
      },
      "Storage.StorageNotExist": {
        "type": "null"
      },
      "Storage.StoragePosition": {
        "type": "null"
      },
      "System.ExUserMap": {
        "type": "null"
      },
      "System.TimeZone": {
        "type": "null"
      }
    }
  },
  "CONFIG_GET_RSP": {
    "id": 1043,
    "commands": {
      "AVEnc.EncodeStaticParam": {
        "type": "array",
        "element": {
          "type": "object",
          "properties": {
            "Level": {
              "type": "number"
            },
            "Profile": {
              "type": "number"
            }
          }
        }
      },
      "AVEnc.SmartH264V2.[0]": {
        "type": "object",
        "properties": {
          "Smart264PlusV2": {
            "type": "array",
            "element": {
              "type": "object",
              "properties": {
                "SmartH264Plus": {
                  "type": "number"
                }
              }
            }
          },
          "Smart264V2": {
            "type": "array",
            "element": {
              "type": "object",
              "properties": {
                "SmartH264": {
                  "type": "number"
                }
              }
            }
          }
        }
      },
      "AVEnc.VideoWidget": {
        "type": "array",
        "element": {
          "type": "object",
          "properties": {
            "ChannelTitle": {
              "type": "object",
              "properties": {
                "Name": {
                  "type": "string"
                },
                "SerialNo": {
                  "type": "string"
                }
              }
            },
            "ChannelTitleAttribute": {
              "type": "object",
              "properties": {
                "BackColor": {
                  "type": "string"
                },
                "EncodeBlend": {
                  "type": "boolean"
                },
                "FrontColor": {
                  "type": "string"
                },
                "PreviewBlend": {
                  "type": "boolean"
                },
                "RelativePos": {
                  "type": "array",
                  "element": {
                    "type": "number"
                  }
                }
              }
            },
            "Covers": {
              "type": "array",
              "element": {
                "type": "object",
                "properties": {
                  "BackColor": {
                    "type": "string"
                  },
                  "EncodeBlend": {
                    "type": "boolean"
                  },
                  "FrontColor": {
                    "type": "string"
                  },
                  "PreviewBlend": {
                    "type": "boolean"
                  },
                  "RelativePos": {
                    "type": "array",
                    "element": {
                      "type": "number"
                    }
                  }
                }
              }
            },
            "CoversNum": {
              "type": "number"
            },
            "TimeTitleAttribute": {
              "type": "object",
              "properties": {
                "BackColor": {
                  "type": "string"
                },
                "EncodeBlend": {
                  "type": "boolean"
                },
                "FrontColor": {
                  "type": "string"
                },
                "PreviewBlend": {
                  "type": "boolean"
                },
                "RelativePos": {
                  "type": "array",
                  "element": {
                    "type": "number"
                  }
                }
              }
            }
          }
        }
      },
      "Alarm.AlarmOut": {
        "type": "array",
        "element": {
          "type": "object",
          "properties": {
            "AlarmOutStatus": {
              "type": "string"
            },
            "AlarmOutType": {
              "type": "string"
            }
          }
        }
      },
      "Alarm.LocalAlarm.[0]": {
        "type": "object",
        "properties": {
          "Enable": {
            "type": "boolean"
          },
          "EventHandler": {
            "type": "object",
            "properties": {
              "AlarmInfo": {
                "type": "string"
              },
              "AlarmOutEnable": {
                "type": "boolean"
              },
              "AlarmOutLatch": {
                "type": "number"
              },
              "AlarmOutMask": {
                "type": "string"
              },
              "BeepEnable": {
                "type": "boolean"
              },
              "EventLatch": {
                "type": "number"
              },
              "FTPEnable": {
                "type": "boolean"
              },
              "LogEnable": {
                "type": "boolean"
              },
              "MailEnable": {
                "type": "boolean"
              },
              "MatrixEnable": {
                "type": "boolean"
              },
              "MatrixMask": {
                "type": "string"
              },
              "MessageEnable": {
                "type": "boolean"
              },
              "MsgtoNetEnable": {
                "type": "boolean"
              },
              "MultimediaMsgEnable": {
                "type": "boolean"
              },
              "PtzEnable": {
                "type": "boolean"
              },
              "PtzLink": {
                "type": "array",
                "element": {
                  "type": "array",
                  "element": {
                    "type": "string"
                  }
                }
              },
              "RecordEnable": {
                "type": "boolean"
              },
              "RecordLatch": {
                "type": "number"
              },
              "RecordMask": {
                "type": "string"
              },
              "ShortMsgEnable": {
                "type": "boolean"
              },
              "ShowInfo": {
                "type": "boolean"
              },
              "ShowInfoMask": {
                "type": "string"
              },
              "SnapEnable": {
                "type": "boolean"
              },
              "SnapShotMask": {
                "type": "string"
              },
              "TimeSection": {
                "type": "array",
                "element": {
                  "type": "array",
                  "element": {
                    "type": "string"
                  }
                }
              },
              "TipEnable": {
                "type": "boolean"
              },
              "TourEnable": {
                "type": "boolean"
              },
              "TourMask": {
                "type": "string"
              },
              "VoiceEnable": {
                "type": "boolean"
              },
              "VoiceTipInterval": {
                "type": "number"
              },
              "VoiceType": {
                "type": "number"
              }
            }
          },
          "SensorType": {
            "type": "string"
          }
        }
      },
      "AppDowloadLink": {
        "type": "object",
        "properties": {
          "AndroidEnable": {
            "type": "number"
          },
          "AndroidLink": {
            "type": "string"
          },
          "IOSEnable": {
            "type": "number"
          },
          "IOSLink": {
            "type": "string"
          },
          "NameOther": {
            "type": "string"
          },
          "OtherEnable": {
            "type": "number"
          },
          "OtherLink": {
            "type": "string"
          },
          "SNEnable": {
            "type": "number"
          }
        }
      },
      "Camera.ClearFog": {
        "type": "array",
        "element": {
          "type": "object",
          "properties": {
            "enable": {
              "type": "number"
            },
            "level": {
              "type": "number"
            }
          }
        }
      },
      "Camera.Param.[0]": {
        "type": "object",
        "properties": {
          "AeSensitivity": {
            "type": "number"
          },
          "ApertureMode": {
            "type": "string"
          },
          "BLCMode": {
            "type": "string"
          },
          "DayNightColor": {
            "type": "string"
          },
          "Day_nfLevel": {
            "type": "number"
          },
          "DncThr": {
            "type": "number"
          },
          "ElecLevel": {
            "type": "number"
          },
          "EsShutter": {
            "type": "string"
          },
          "ExposureParam": {
            "type": "object",
            "properties": {
              "LeastTime": {
                "type": "string"
              },
              "Level": {
                "type": "number"
              },
              "MostTime": {
                "type": "string"
              }
            }
          },
          "GainParam": {
            "type": "object",
            "properties": {
              "AutoGain": {
                "type": "number"
              },
              "Gain": {
                "type": "number"
              }
            }
          },
          "IRCUTMode": {
            "type": "number"
          },
          "IrcutSwap": {
            "type": "number"
          },
          "Night_nfLevel": {
            "type": "number"
          },
          "PictureFlip": {
            "type": "string"
          },
          "PictureMirror": {
            "type": "string"
          },
          "RejectFlicker": {
            "type": "number"
          },
          "WhiteBalance": {
            "type": "string"
          }
        }
      },
      "Camera.ParamEx.[0]": {
        "type": "object",
        "properties": {
          "AutomaticAdjustment": {
            "type": "number"
          },
          "BroadTrends": {
            "type": "object",
            "properties": {
              "AutoGain": {
                "type": "number"
              },
              "Gain": {
                "type": "number"
              }
            }
          },
          "CorridorMode": {
            "type": "number"
          },
          "ExposureTime": {
            "type": "string"
          },
          "LightRestrainLevel": {
            "type": "number"
          },
          "LowLuxMode": {
            "type": "number"
          },
          "PreventOverExpo": {
            "type": "number"
          },
          "SoftPhotosensitivecontrol": {
            "type": "number"
          },
          "Style": {
            "type": "string"
          }
        }
      },
      "Detect.BlindDetect.[0]": {
        "type": "object",
        "properties": {
          "Enable": {
            "type": "boolean"
          },
          "EventHandler": {
            "type": "object",
            "properties": {
              "AlarmInfo": {
                "type": "string"
              },
              "AlarmOutEnable": {
                "type": "boolean"
              },
              "AlarmOutLatch": {
                "type": "number"
              },
              "AlarmOutMask": {
                "type": "string"
              },
              "BeepEnable": {
                "type": "boolean"
              },
              "EventLatch": {
                "type": "number"
              },
              "FTPEnable": {
                "type": "boolean"
              },
              "LogEnable": {
                "type": "boolean"
              },
              "MailEnable": {
                "type": "boolean"
              },
              "MatrixEnable": {
                "type": "boolean"
              },
              "MatrixMask": {
                "type": "string"
              },
              "MessageEnable": {
                "type": "boolean"
              },
              "MsgtoNetEnable": {
                "type": "boolean"
              },
              "MultimediaMsgEnable": {
                "type": "boolean"
              },
              "PtzEnable": {
                "type": "boolean"
              },
              "PtzLink": {
                "type": "array",
                "element": {
                  "type": "array",
                  "element": {
                    "type": "string"
                  }
                }
              },
              "RecordEnable": {
                "type": "boolean"
              },
              "RecordLatch": {
                "type": "number"
              },
              "RecordMask": {
                "type": "string"
              },
              "ShortMsgEnable": {
                "type": "boolean"
              },
              "ShowInfo": {
                "type": "boolean"
              },
              "ShowInfoMask": {
                "type": "string"
              },
              "SnapEnable": {
                "type": "boolean"
              },
              "SnapShotMask": {
                "type": "string"
              },
              "TimeSection": {
                "type": "array",
                "element": {
                  "type": "array",
                  "element": {
                    "type": "string"
                  }
                }
              },
              "TipEnable": {
                "type": "boolean"
              },
              "TourEnable": {
                "type": "boolean"
              },
              "TourMask": {
                "type": "string"
              },
              "VoiceEnable": {
                "type": "boolean"
              },
              "VoiceTipInterval": {
                "type": "number"
              },
              "VoiceType": {
                "type": "number"
              }
            }
          },
          "Level": {
            "type": "number"
          }
        }
      },
      "Detect.HumanDetection.[0]": {
        "type": "object",
        "properties": {
          "Enable": {
            "type": "boolean"
          },
          "ObjectType": {
            "type": "number"
          },
          "PedRule": {
            "type": "array",
            "element": {
              "type": "object",
              "properties": {
                "Enable": {
                  "type": "boolean"
                },
                "RuleLine": {
                  "type": "object",
                  "properties": {
                    "AlarmDirect": {
                      "type": "number"
                    },
                    "Pts": {
                      "type": "object",
                      "properties": {
                        "StartX": {
                          "type": "number"
                        },
                        "StartY": {
                          "type": "number"
                        },
                        "StopX": {
                          "type": "number"
                        },
                        "StopY": {
                          "type": "number"
                        }
                      }
                    }
                  }
                },
                "RuleRegion": {
                  "type": "object",
                  "properties": {
                    "AlarmDirect": {
                      "type": "number"
                    },
                    "PtsNum": {
                      "type": "number"
                    }
                  }
                },
                "RuleType": {
                  "type": "number"
                }
              }
            }
          },
          "Sensitivity": {
            "type": "number"
          },
          "ShowRule": {
            "type": "number"
          },
          "ShowTrack": {
            "type": "number"
          }
        }
      },
      "Detect.LossDetect.[0]": {
        "type": "object",
        "properties": {
          "Enable": {
            "type": "boolean"
          },
          "EventHandler": {
            "type": "object",
            "properties": {
              "AlarmInfo": {
                "type": "string"
              },
              "AlarmOutEnable": {
                "type": "boolean"
              },
              "AlarmOutLatch": {
                "type": "number"
              },
              "AlarmOutMask": {
                "type": "string"
              },
              "BeepEnable": {
                "type": "boolean"
              },
              "EventLatch": {
                "type": "number"
              },
              "FTPEnable": {
                "type": "boolean"
              },
              "LogEnable": {
                "type": "boolean"
              },
              "MailEnable": {
                "type": "boolean"
              },
              "MatrixEnable": {
                "type": "boolean"
              },
              "MatrixMask": {
                "type": "string"
              },
              "MessageEnable": {
                "type": "boolean"
              },
              "MsgtoNetEnable": {
                "type": "boolean"
              },
              "MultimediaMsgEnable": {
                "type": "boolean"
              },
              "PtzEnable": {
                "type": "boolean"
              },
              "PtzLink": {
                "type": "array",
                "element": {
                  "type": "array",
                  "element": {
                    "type": "string"
                  }
                }
              },
              "RecordEnable": {
                "type": "boolean"
              },
              "RecordLatch": {
                "type": "number"
              },
              "RecordMask": {
                "type": "string"
              },
              "ShortMsgEnable": {
                "type": "boolean"
              },
              "ShowInfo": {
                "type": "boolean"
              },
              "ShowInfoMask": {
                "type": "string"
              },
              "SnapEnable": {
                "type": "boolean"
              },
              "SnapShotMask": {
                "type": "string"
              },
              "TimeSection": {
                "type": "array",
                "element": {
                  "type": "array",
                  "element": {
                    "type": "string"
                  }
                }
              },
              "TipEnable": {
                "type": "boolean"
              },
              "TourEnable": {
                "type": "boolean"
              },
              "TourMask": {
                "type": "string"
              },
              "VoiceEnable": {
                "type": "boolean"
              },
              "VoiceTipInterval": {
                "type": "number"
              },
              "VoiceType": {
                "type": "number"
              }
            }
          }
        }
      },
      "Detect.MotionDetect.[0]": {
        "type": "object",
        "properties": {
          "Enable": {
            "type": "boolean"
          },
          "EventHandler": {
            "type": "object",
            "properties": {
              "AlarmInfo": {
                "type": "string"
              },
              "AlarmOutEnable": {
                "type": "boolean"
              },
              "AlarmOutLatch": {
                "type": "number"
              },
              "AlarmOutMask": {
                "type": "string"
              },
              "BeepEnable": {
                "type": "boolean"
              },
              "EventLatch": {
                "type": "number"
              },
              "FTPEnable": {
                "type": "boolean"
              },
              "LogEnable": {
                "type": "boolean"
              },
              "MailEnable": {
                "type": "boolean"
              },
              "MatrixEnable": {
                "type": "boolean"
              },
              "MatrixMask": {
                "type": "string"
              },
              "MessageEnable": {
                "type": "boolean"
              },
              "MsgtoNetEnable": {
                "type": "boolean"
              },
              "MultimediaMsgEnable": {
                "type": "boolean"
              },
              "PtzEnable": {
                "type": "boolean"
              },
              "PtzLink": {
                "type": "array",
                "element": {
                  "type": "array",
                  "element": {
                    "type": "string"
                  }
                }
              },
              "RecordEnable": {
                "type": "boolean"
              },
              "RecordLatch": {
                "type": "number"
              },
              "RecordMask": {
                "type": "string"
              },
              "ShortMsgEnable": {
                "type": "boolean"
              },
              "ShowInfo": {
                "type": "boolean"
              },
              "ShowInfoMask": {
                "type": "string"
              },
              "SnapEnable": {
                "type": "boolean"
              },
              "SnapShotMask": {
                "type": "string"
              },
              "TimeSection": {
                "type": "array",
                "element": {
                  "type": "array",
                  "element": {
                    "type": "string"
                  }
                }
              },
              "TipEnable": {
                "type": "boolean"
              },
              "TourEnable": {
                "type": "boolean"
              },
              "TourMask": {
                "type": "string"
              },
              "VoiceEnable": {
                "type": "boolean"
              },
              "VoiceTipInterval": {
                "type": "number"
              },
              "VoiceType": {
                "type": "number"
              }
            }
          },
          "Level": {
            "type": "number"
          },
          "Region": {
            "type": "array",
            "element": {
              "type": "string"
            }
          }
        }
      },
      "General.General": {
        "type": "object",
        "properties": {
          "AutoLogout": {
            "type": "number"
          },
          "FontSize": {
            "type": "number"
          },
          "IranCalendarEnable": {
            "type": "number"
          },
          "LocalNo": {
            "type": "number"
          },
          "MachineName": {
            "type": "string"
          },
          "OverWrite": {
            "type": "string"
          },
          "ScreenAutoShutdown": {
            "type": "number"
          },
          "ScreenSaveTime": {
            "type": "number"
          },
          "VideoOutPut": {
            "type": "string"
          }
        }
      },
      "General.Location": {
        "type": "object",
        "properties": {
          "DSTEnd": {
            "type": "object",
            "properties": {
              "Day": {
                "type": "number"
              },
              "Hour": {
                "type": "number"
              },
              "Minute": {
                "type": "number"
              },
              "Month": {
                "type": "number"
              },
              "Week": {
                "type": "number"
              },
              "Year": {
                "type": "number"
              }
            }
          },
          "DSTRule": {
            "type": "string"
          },
          "DSTStart": {
            "type": "object",
            "properties": {
              "Day": {
                "type": "number"
              },
              "Hour": {
                "type": "number"
              },
              "Minute": {
                "type": "number"
              },
              "Month": {
                "type": "number"
              },
              "Week": {
                "type": "number"
              },
              "Year": {
                "type": "number"
              }
            }
          },
          "DateFormat": {
            "type": "string"
          },
          "DateSeparator": {
            "type": "string"
          },
          "IranCalendar": {
            "type": "number"
          },
          "Language": {
            "type": "string"
          },
          "TimeFormat": {
            "type": "string"
          },
          "VideoFormat": {
            "type": "string"
          },
          "WorkDay": {
            "type": "number"
          }
        }
      },
      "General.PwdSafety": {
        "type": "object",
        "properties": {
          "PwdReset": {
            "type": "array",
            "element": {
              "type": "object",
              "properties": {
                "QuestionAnswer": {
                  "type": "string"
                },
                "QuestionIndex": {
                  "type": "number"
                }
              }
            }
          },
          "SecurityEmail": {
            "type": "string"
          },
          "TipPageHide": {
            "type": "boolean"
          }
        }
      },
      "NetWork.AlarmServer": {
        "type": "array",
        "element": {
          "type": "object",
          "properties": {
            "Alarm": {
              "type": "boolean"
            },
            "Enable": {
              "type": "boolean"
            },
            "Log": {
              "type": "boolean"
            },
            "Protocol": {
              "type": "string"
            },
            "Server": {
              "type": "object",
              "properties": {
                "Address": {
                  "type": "string"
                },
                "Anonymity": {
                  "type": "boolean"
                },
                "Name": {
                  "type": "string"
                },
                "Password": {
                  "type": "string"
                },
                "Port": {
                  "type": "number"
                },
                "UserName": {
                  "type": "string"
                }
              }
            }
          }
        }
      },
      "NetWork.DAS": {
        "type": "object",
        "properties": {
          "DeviceID": {
            "type": "string"
          },
          "Enable": {
            "type": "boolean"
          },
          "Password": {
            "type": "string"
          },
          "Port": {
            "type": "number"
          },
          "ServerAddr": {
            "type": "string"
          },
          "UserName": {
            "type": "string"
          }
        }
      },
      "NetWork.IPAdaptive": {
        "type": "object",
        "properties": {
          "IPAdaptive": {
            "type": "boolean"
          }
        }
      },
      "NetWork.Nat": {
        "type": "object",
        "properties": {
          "Addr": {
            "type": "string"
          },
          "DnsServer1": {
            "type": "string"
          },
          "DnsServer2": {
            "type": "string"
          },
          "NatEnable": {
            "type": "boolean"
          },
          "Port": {
            "type": "number"
          },
          "XMeyeMTU": {
            "type": "number"
          }
        }
      },
      "NetWork.NetARSP": {
        "type": "array",
        "element": {
          "type": "object",
          "properties": {
            "ARSPKey": {
              "type": "string"
            },
            "Enable": {
              "type": "boolean"
            },
            "HttpPort": {
              "type": "number"
            },
            "Interval": {
              "type": "number"
            },
            "Server": {
              "type": "object",
              "properties": {
                "Address": {
                  "type": "string"
                },
                "Anonymity": {
                  "type": "boolean"
                },
                "Name": {
                  "type": "string"
                },
                "Password": {
                  "type": "string"
                },
                "Port": {
                  "type": "number"
                },
                "UserName": {
                  "type": "string"
                }
              }
            },
            "URL": {
              "type": "string"
            }
          }
        }
      },
      "NetWork.NetCommon": {
        "type": "object",
        "properties": {
          "GateWay": {
            "type": "string"
          },
          "HostIP": {
            "type": "string"
          },
          "HostName": {
            "type": "string"
          },
          "HttpPort": {
            "type": "number"
          },
          "MAC": {
            "type": "string"
          },
          "MaxBps": {
            "type": "number"
          },
          "MonMode": {
            "type": "string"
          },
          "SSLPort": {
            "type": "number"
          },
          "Submask": {
            "type": "string"
          },
          "TCPMaxConn": {
            "type": "number"
          },
          "TCPPort": {
            "type": "number"
          },
          "TransferPlan": {
            "type": "string"
          },
          "UDPPort": {
            "type": "number"
          },
          "UseHSDownLoad": {
            "type": "boolean"
          }
        }
      },
      "NetWork.NetDDNS": {
        "type": "array",
        "element": {
          "type": "object",
          "properties": {
            "DDNSKey": {
              "type": "string"
            },
            "Enable": {
              "type": "boolean"
            },
            "HostName": {
              "type": "string"
            },
            "Online": {
              "type": "boolean"
            },
            "Server": {
              "type": "object",
              "properties": {
                "Address": {
                  "type": "string"
                },
                "Anonymity": {
                  "type": "boolean"
                },
                "Name": {
                  "type": "string"
                },
                "Password": {
                  "type": "string"
                },
                "Port": {
                  "type": "number"
                },
                "UserName": {
                  "type": "string"
                }
              }
            }
          }
        }
      },
      "NetWork.NetDHCP": {
        "type": "array",
        "element": {
          "type": "object",
          "properties": {
            "Enable": {
              "type": "boolean"
            },
            "Interface": {
              "type": "string"
            }
          }
        }
      },
      "NetWork.NetDNS": {
        "type": "object",
        "properties": {
          "Address": {
            "type": "string"
          },
          "SpareAddress": {
            "type": "string"
          }
        }
      },
      "NetWork.NetEmail": {
        "type": "object",
        "properties": {
          "Enable": {
            "type": "boolean"
          },
          "MailServer": {
            "type": "object",
            "properties": {
              "Address": {
                "type": "string"
              },
              "Anonymity": {
                "type": "boolean"
              },
              "Name": {
                "type": "string"
              },
              "Password": {
                "type": "string"
              },
              "Port": {
                "type": "number"
              },
              "UserName": {
                "type": "string"
              }
            }
          },
          "Port": {
            "type": "number"
          },
          "Recievers": {
            "type": "array",
            "element": {
              "type": "string"
            }
          },
          "Schedule": {
            "type": "array",
            "element": {
              "type": "string"
            }
          },
          "SendAddr": {
            "type": "string"
          },
          "Title": {
            "type": "string"
          },
          "UseSSL": {
            "type": "number"
          }
        }
      },
      "NetWork.NetFTP": {
        "type": "object",
        "properties": {
          "Directory": {
            "type": "string"
          },
          "Enable": {
            "type": "boolean"
          },
          "MaxFileLen": {
            "type": "number"
          },
          "Server": {
            "type": "object",
            "properties": {
              "Address": {
                "type": "string"
              },
              "Anonymity": {
                "type": "boolean"
              },
              "Name": {
                "type": "string"
              },
              "Password": {
                "type": "string"
              },
              "Port": {
                "type": "number"
              },
              "UserName": {
                "type": "string"
              }
            }
          }
        }
      },
      "NetWork.NetIPFilter": {
        "type": "object",
        "properties": {
          "Banned": {
            "type": "array",
            "element": {
              "type": "string"
            }
          },
          "Enable": {
            "type": "boolean"
          },
          "Trusted": {
            "type": "array",
            "element": {
              "type": "string"
            }
          }
        }
      },
      "NetWork.NetNTP": {
        "type": "object",
        "properties": {
          "Enable": {
            "type": "boolean"
          },
          "Server": {
            "type": "object",
            "properties": {
              "Address": {
                "type": "string"
              },
              "Anonymity": {
                "type": "boolean"
              },
              "Name": {
                "type": "string"
              },
              "Password": {
                "type": "string"
              },
              "Port": {
                "type": "number"
              },
              "UserName": {
                "type": "string"
              }
            }
          },
          "TimeZone": {
            "type": "number"
          },
          "UpdatePeriod": {
            "type": "number"
          }
        }
      },
      "NetWork.OnvifPwdCheckout": {
        "type": "object",
        "properties": {
          "Enable": {
            "type": "boolean"
          }
        }
      },
      "NetWork.PMS": {
        "type": "object",
        "properties": {
          "BoxID": {
            "type": "string"
          },
          "Enable": {
            "type": "boolean"
          },
          "Port": {
            "type": "number"
          },
          "PushInterval": {
            "type": "number"
          },
          "ServName": {
            "type": "string"
          }
        }
      },
      "NetWork.RTSP": {
        "type": "object",
        "properties": {
          "Client": {
            "type": "object",
            "properties": {
              "Address": {
                "type": "string"
              },
              "Anonymity": {
                "type": "boolean"
              },
              "Name": {
                "type": "string"
              },
              "Password": {
                "type": "string"
              },
              "Port": {
                "type": "number"
              },
              "UserName": {
                "type": "string"
              }
            }
          },
          "IsClient": {
            "type": "boolean"
          },
          "IsServer": {
            "type": "boolean"
          },
          "Server": {
            "type": "object",
            "properties": {
              "Address": {
                "type": "string"
              },
              "Anonymity": {
                "type": "boolean"
              },
              "Name": {
                "type": "string"
              },
              "Password": {
                "type": "string"
              },
              "Port": {
                "type": "number"
              },
              "UserName": {
                "type": "string"
              }
            }
          }
        }
      },
      "NetWork.Upnp": {
        "type": "object",
        "properties": {
          "Enable": {
            "type": "boolean"
          },
          "HTTPPort": {
            "type": "number"
          },
          "MediaPort": {
            "type": "number"
          },
          "MobilePort": {
            "type": "number"
          },
          "State": {
            "type": "boolean"
          }
        }
      },
      "OEMcfg.Correspondent": {
        "type": "object",
        "properties": {
          "BrandInfo": {
            "type": "string"
          },
          "FirmwareVersion": {
            "type": "string"
          },
          "HardwareId": {
            "type": "string"
          },
          "Port": {
            "type": "number"
          },
          "RevSpace": {
            "type": "string"
          },
          "Scope": {
            "type": "array",
            "element": {
              "type": "string"
            }
          }
        }
      },
      "PMS.num": {
        "type": "object",
        "properties": {
          "AbilityPram": {
            "type": "string"
          }
        }
      },
      "Record.[0]": {
        "type": "object",
        "properties": {
          "Mask": {
            "type": "array",
            "element": {
              "type": "array",
              "element": {
                "type": "string"
              }
            }
          },
          "PacketLength": {
            "type": "number"
          },
          "PreRecord": {
            "type": "number"
          },
          "RecordMode": {
            "type": "string"
          },
          "Redundancy": {
            "type": "boolean"
          },
          "TimeSection": {
            "type": "array",
            "element": {
              "type": "array",
              "element": {
                "type": "string"
              }
            }
          }
        }
      },
      "Simplify.Encode": {
        "type": "array",
        "element": {
          "type": "object",
          "properties": {
            "ExtraFormat": {
              "type": "object",
              "properties": {
                "AudioEnable": {
                  "type": "boolean"
                },
                "Video": {
                  "type": "object",
                  "properties": {
                    "BitRate": {
                      "type": "number"
                    },
                    "BitRateControl": {
                      "type": "string"
                    },
                    "Compression": {
                      "type": "string"
                    },
                    "FPS": {
                      "type": "number"
                    },
                    "GOP": {
                      "type": "number"
                    },
                    "Quality": {
                      "type": "number"
                    },
                    "Resolution": {
                      "type": "string"
                    }
                  }
                },
                "VideoEnable": {
                  "type": "boolean"
                }
              }
            },
            "MainFormat": {
              "type": "object",
              "properties": {
                "AudioEnable": {
                  "type": "boolean"
                },
                "Video": {
                  "type": "object",
                  "properties": {
                    "BitRate": {
                      "type": "number"
                    },
                    "BitRateControl": {
                      "type": "string"
                    },
                    "Compression": {
                      "type": "string"
                    },
                    "FPS": {
                      "type": "number"
                    },
                    "GOP": {
                      "type": "number"
                    },
                    "Quality": {
                      "type": "number"
                    },
                    "Resolution": {
                      "type": "string"
                    }
                  }
                },
                "VideoEnable": {
                  "type": "boolean"
                }
              }
            }
          }
        }
      },
      "Snap.SnapConfig.[0]": {
        "type": "object",
        "properties": {
          "IntervalSnap": {
            "type": "object",
            "properties": {
              "EmailTime": {
                "type": "number"
              },
              "FTPTime": {
                "type": "number"
              },
              "StorageTime": {
                "type": "number"
              }
            }
          },
          "SnapType": {
            "type": "number"
          }
        }
      },
      "Storage.StorageNotExist": {
        "type": "object",
        "properties": {
          "Enable": {
            "type": "boolean"
          },
          "EventHandler": {
            "type": "object",
            "properties": {
              "AlarmInfo": {
                "type": "string"
              },
              "AlarmOutEnable": {
                "type": "boolean"
              },
              "AlarmOutLatch": {
                "type": "number"
              },
              "AlarmOutMask": {
                "type": "string"
              },
              "BeepEnable": {
                "type": "boolean"
              },
              "EventLatch": {
                "type": "number"
              },
              "FTPEnable": {
                "type": "boolean"
              },
              "LogEnable": {
                "type": "boolean"
              },
              "MailEnable": {
                "type": "boolean"
              },
              "MatrixEnable": {
                "type": "boolean"
              },
              "MatrixMask": {
                "type": "string"
              },
              "MessageEnable": {
                "type": "boolean"
              },
              "MsgtoNetEnable": {
                "type": "boolean"
              },
              "MultimediaMsgEnable": {
                "type": "boolean"
              },
              "PtzEnable": {
                "type": "boolean"
              },
              "PtzLink": {
                "type": "array",
                "element": {
                  "type": "array",
                  "element": {
                    "type": "string"
                  }
                }
              },
              "RecordEnable": {
                "type": "boolean"
              },
              "RecordLatch": {
                "type": "number"
              },
              "RecordMask": {
                "type": "string"
              },
              "ShortMsgEnable": {
                "type": "boolean"
              },
              "ShowInfo": {
                "type": "boolean"
              },
              "ShowInfoMask": {
                "type": "string"
              },
              "SnapEnable": {
                "type": "boolean"
              },
              "SnapShotMask": {
                "type": "string"
              },
              "TimeSection": {
                "type": "array",
                "element": {
                  "type": "array",
                  "element": {
                    "type": "string"
                  }
                }
              },
              "TipEnable": {
                "type": "boolean"
              },
              "TourEnable": {
                "type": "boolean"
              },
              "TourMask": {
                "type": "string"
              },
              "VoiceEnable": {
                "type": "boolean"
              }
            }
          }
        }
      },
      "Storage.StoragePosition": {
        "type": "object",
        "properties": {
          "DVD": {
            "type": "boolean"
          },
          "SATA": {
            "type": "boolean"
          },
          "SD": {
            "type": "boolean"
          },
          "USB": {
            "type": "boolean"
          }
        }
      },
      "System.ExUserMap": {
        "type": "object",
        "properties": {
          "User": {
            "type": "array",
            "element": {
              "type": "object",
              "properties": {
                "AuthorityList": {
                  "type": "array",
                  "element": {
                    "type": "string"
                  }
                },
                "Group": {
                  "type": "string"
                },
                "Memo": {
                  "type": "string"
                },
                "Name": {
                  "type": "string"
                },
                "Password": {
                  "type": "string"
                },
                "Reserved": {
                  "type": "boolean"
                },
                "Sharable": {
                  "type": "boolean"
                }
              }
            }
          },
          "UserNum": {
            "type": "number"
          }
        }
      },
      "System.TimeZone": {
        "type": "object",
        "properties": {
          "FirstUserTimeZone": {
            "type": "number"
          },
          "timeMin": {
            "type": "number"
          }
        }
      },
      "fVideo.GUISet": {
        "type": "object",
        "properties": {
          "AlarmStateEnable": {
            "type": "boolean"
          },
          "CarInfo": {
            "type": "boolean"
          },
          "ChanStateBitRateEnable": {
            "type": "boolean"
          },
          "ChanStateLckEnable": {
            "type": "boolean"
          },
          "ChanStateMtdEnable": {
            "type": "boolean"
          },
          "ChanStateVlsEnable": {
            "type": "boolean"
          },
          "ChannelTitleEnable": {
            "type": "boolean"
          },
          "Deflick": {
            "type": "boolean"
          },
          "GPSInfo": {
            "type": "boolean"
          },
          "RecordStateEnable": {
            "type": "boolean"
          },
          "RemoteEnable": {
            "type": "boolean"
          },
          "TimeTitleEnable": {
            "type": "boolean"
          },
          "WindowAlpha": {
            "type": "number"
          }
        }
      }
    }
  },
  "DEFAULT_CONFIG_GET": {
    "id": 1044
  },
  "DEFAULT_CONFIG_GET_RSP": {
    "id": 1045
  },
  "CONFIG_CHANNELTITLE_SET": {
    "id": 1046,
    "commands": {
      "ChannelTitle": {
        "type": "array",
        "element": {
          "type": "string"
        }
      }
    }
  },
  "CONFIG_CHANNELTITLE_SET_RSP": {
    "id": 1047,
    "type": "object",
    "properties": {
      "Name": {
        "type": "string"
      }
    }
  },
  "CONFIG_CHANNELTITLE_GET": {
    "id": 1048,
    "commands": {
      "ChannelTitle": {
        "type": "null"
      }
    }
  },
  "CONFIG_CHANNELTITLE_GET_RSP": {
    "id": 1049,
    "commands": {
      "ChannelTitle": {
        "type": "array",
        "element": {
          "type": "string"
        }
      }
    }
  },
  "CONFIG_CHANNELTITLE_DOT_SET": {
    "id": 1050
  },
  "CONFIG_CHANNELTITLE_DOT_SET_RSP": {
    "id": 1051,
    "type": "object",
    "properties": {
      "Name": {
        "type": "string"
      }
    }
  },
  "SYSTEM_DEBUG_REQ": {
    "id": 1052
  },
  "SYSTEM_DEBUG_RSP": {
    "id": 1053
  },
  "ABILITY_GET": {
    "id": 1360,
    "commands": {
      "AHDEncodeL": {
        "type": "null"
      },
      "BlindCapability": {
        "type": "null"
      },
      "Camera": {
        "type": "null"
      },
      "DDNSService": {
        "type": "null"
      },
      "DimenCode": {
        "type": "null"
      },
      "Encode264ability": {
        "type": "null"
      },
      "EncodeCapability": {
        "type": "null"
      },
      "HumanRuleLimit": {
        "type": "null"
      },
      "MaxPreRecord": {
        "type": "null"
      },
      "MotionArea": {
        "type": "null"
      },
      "MultiLanguage": {
        "type": "null"
      },
      "MultiVstd": {
        "type": "null"
      },
      "NetOrder": {
        "type": "null"
      },
      "QuestionDelivery": {
        "type": "null"
      },
      "SupportExtRecord": {
        "type": "null"
      },
      "SystemFunction": {
        "type": "null"
      },
      "VencMaxFps": {
        "type": "null"
      }
    }
  },
  "ABILITY_GET_RSP": {
    "id": 1361,
    "commands": {
      "AHDEncodeL": {
        "type": "object",
        "properties": {
          "AHDLMask": {
            "type": "string"
          }
        }
      },
      "BlindCapability": {
        "type": "object",
        "properties": {
          "BlindCoverNum": {
            "type": "number"
          }
        }
      },
      "Camera": {
        "type": "object",
        "properties": {
          "Count": {
            "type": "number"
          },
          "ElecLevel": {
            "type": "number"
          },
          "IsFishLens": {
            "type": "number"
          },
          "Luminance": {
            "type": "number"
          },
          "Speeds": {
            "type": "array",
            "element": {
              "type": "string"
            }
          },
          "Status": {
            "type": "number"
          },
          "SupportIntellDoubleLight": {
            "type": "number"
          },
          "SupportPreventOverExpo": {
            "type": "number"
          },
          "Version": {
            "type": "string"
          }
        }
      },
      "DDNSService": {
        "type": "array",
        "element": {
          "type": "string"
        }
      },
      "DimenCode": {
        "type": "object",
        "properties": {
          "SN": {
            "type": "object",
            "properties": {
              "code": {
                "type": "string"
              },
              "size": {
                "type": "number"
              }
            }
          },
          "appAndroid": {
            "type": "object",
            "properties": {
              "code": {
                "type": "string"
              },
              "size": {
                "type": "number"
              }
            }
          },
          "appIOS": {
            "type": "object",
            "properties": {
              "code": {
                "type": "string"
              },
              "size": {
                "type": "number"
              }
            }
          },
          "otherInfo": {
            "type": "object",
            "properties": {
              "code": {
                "type": "string"
              },
              "size": {
                "type": "number"
              }
            }
          }
        }
      },
      "Encode264ability": {
        "type": "object",
        "properties": {
          "uIntel264": {
            "type": "array",
            "element": {
              "type": "string"
            }
          },
          "uIntel264Plus": {
            "type": "array",
            "element": {
              "type": "string"
            }
          }
        }
      },
      "EncodeCapability": {
        "type": "object",
        "properties": {
          "ChannelMaxSetSync": {
            "type": "number"
          },
          "CombEncodeInfo": {
            "type": "array",
            "element": {
              "type": "object",
              "properties": {
                "CompressionMask": {
                  "type": "string"
                },
                "Enable": {
                  "type": "boolean"
                },
                "HaveAudio": {
                  "type": "boolean"
                },
                "ResolutionMask": {
                  "type": "string"
                },
                "StreamType": {
                  "type": "string"
                }
              }
            }
          },
          "Compression": {
            "type": "string"
          },
          "EncodeInfo": {
            "type": "array",
            "element": {
              "type": "object",
              "properties": {
                "CompressionMask": {
                  "type": "string"
                },
                "Enable": {
                  "type": "boolean"
                },
                "HaveAudio": {
                  "type": "boolean"
                },
                "ResolutionMask": {
                  "type": "string"
                },
                "StreamType": {
                  "type": "string"
                }
              }
            }
          },
          "ExImageSizePerChannel": {
            "type": "array",
            "element": {
              "type": "string"
            }
          },
          "ExImageSizePerChannelEx": {
            "type": "array",
            "element": {
              "type": "array",
              "element": {
                "type": "string"
              }
            }
          },
          "FourthStreamImageSize": {
            "type": "array",
            "element": {
              "type": "string"
            }
          },
          "ImageSizePerChannel": {
            "type": "array",
            "element": {
              "type": "string"
            }
          },
          "MaxBitrate": {
            "type": "number"
          },
          "MaxEncodePower": {
            "type": "number"
          },
          "MaxEncodePowerPerChannel": {
            "type": "array",
            "element": {
              "type": "string"
            }
          },
          "ThirdStreamImageSize": {
            "type": "array",
            "element": {
              "type": "string"
            }
          }
        }
      },
      "MotionArea": {
        "type": "object",
        "properties": {
          "GridColumn": {
            "type": "number"
          },
          "GridRow": {
            "type": "number"
          }
        }
      },
      "MultiLanguage": {
        "type": "array",
        "element": {
          "type": "string"
        }
      },
      "MultiVstd": {
        "type": "string"
      },
      "QuestionDelivery": {
        "type": "array",
        "element": {
          "type": "string"
        }
      },
      "SupportExtRecord": {
        "type": "object",
        "properties": {
          "AbilityPram": {
            "type": "string"
          }
        }
      },
      "SystemFunction": {
        "type": "object",
        "properties": {
          "AlarmFunction": {
            "type": "object",
            "properties": {
              "433Alarm": {
                "type": "boolean"
              },
              "AlarmConfig": {
                "type": "boolean"
              },
              "BlindDetect": {
                "type": "boolean"
              },
              "BlurCheck": {
                "type": "boolean"
              },
              "Consumer433Alarm": {
                "type": "boolean"
              },
              "ConsumerRemote": {
                "type": "boolean"
              },
              "HumanDection": {
                "type": "boolean"
              },
              "IPCAlarm": {
                "type": "boolean"
              },
              "LossDetect": {
                "type": "boolean"
              },
              "MotionDetect": {
                "type": "boolean"
              },
              "NetAbort": {
                "type": "boolean"
              },
              "NetAbortExtend": {
                "type": "boolean"
              },
              "NetAlarm": {
                "type": "boolean"
              },
              "NetIpConflict": {
                "type": "boolean"
              },
              "NewVideoAnalyze": {
                "type": "boolean"
              },
              "PIRAlarm": {
                "type": "boolean"
              },
              "SensorAlarmCenter": {
                "type": "boolean"
              },
              "SerialAlarm": {
                "type": "boolean"
              },
              "StorageFailure": {
                "type": "boolean"
              },
              "StorageLowSpace": {
                "type": "boolean"
              },
              "StorageNotExist": {
                "type": "boolean"
              },
              "VideoAnalyze": {
                "type": "boolean"
              }
            }
          },
          "CommFunction": {
            "type": "object",
            "properties": {
              "CommRS232": {
                "type": "boolean"
              },
              "CommRS485": {
                "type": "boolean"
              }
            }
          },
          "EncodeFunction": {
            "type": "object",
            "properties": {
              "CombineStream": {
                "type": "boolean"
              },
              "DoubleStream": {
                "type": "boolean"
              },
              "IFrameRange": {
                "type": "boolean"
              },
              "IntelligentEncode": {
                "type": "boolean"
              },
              "LowBitRate": {
                "type": "boolean"
              },
              "SmartH264": {
                "type": "boolean"
              },
              "SmartH264V2": {
                "type": "boolean"
              },
              "SnapStream": {
                "type": "boolean"
              },
              "WaterMark": {
                "type": "boolean"
              }
            }
          },
          "InputMethod": {
            "type": "object",
            "properties": {
              "NoSupportChinese": {
                "type": "boolean"
              }
            }
          },
          "MobileDVR": {
            "type": "object",
            "properties": {
              "CarPlateSet": {
                "type": "boolean"
              },
              "DVRBootType": {
                "type": "boolean"
              },
              "DelaySet": {
                "type": "boolean"
              },
              "GpsTiming": {
                "type": "boolean"
              },
              "StatusExchange": {
                "type": "boolean"
              }
            }
          },
          "NetServerFunction": {
            "type": "object",
            "properties": {
              "IPAdaptive": {
                "type": "boolean"
              },
              "MACProtocol": {
                "type": "boolean"
              },
              "MonitorPlatform": {
                "type": "boolean"
              },
              "NATProtocol": {
                "type": "boolean"
              },
              "Net3G": {
                "type": "boolean"
              },
              "Net4G": {
                "type": "boolean"
              },
              "NetARSP": {
                "type": "boolean"
              },
              "NetAlarmCenter": {
                "type": "boolean"
              },
              "NetAnJuP2P": {
                "type": "boolean"
              },
              "NetBaiduCloud": {
                "type": "boolean"
              },
              "NetBjlThy": {
                "type": "boolean"
              },
              "NetDAS": {
                "type": "boolean"
              },
              "NetDDNS": {
                "type": "boolean"
              },
              "NetDHCP": {
                "type": "boolean"
              },
              "NetDNS": {
                "type": "boolean"
              },
              "NetDataLink": {
                "type": "boolean"
              },
              "NetEmail": {
                "type": "boolean"
              },
              "NetFTP": {
                "type": "boolean"
              },
              "NetGlobalEyes": {
                "type": "boolean"
              },
              "NetGodEyeAlarm": {
                "type": "boolean"
              },
              "NetHMS": {
                "type": "boolean"
              },
              "NetIPFilter": {
                "type": "boolean"
              },
              "NetIPv6": {
                "type": "boolean"
              },
              "NetKaiCong": {
                "type": "boolean"
              },
              "NetKeyboard": {
                "type": "boolean"
              },
              "NetLocalSdkPlatform": {
                "type": "boolean"
              },
              "NetMidDAS": {
                "type": "boolean"
              },
              "NetMobile": {
                "type": "boolean"
              },
              "NetMobileWatch": {
                "type": "boolean"
              },
              "NetMutliCast": {
                "type": "boolean"
              },
              "NetNTP": {
                "type": "boolean"
              },
              "NetNat": {
                "type": "boolean"
              },
              "NetOpenVPN": {
                "type": "boolean"
              },
              "NetPMS": {
                "type": "boolean"
              },
              "NetPMSV2": {
                "type": "boolean"
              },
              "NetPPPoE": {
                "type": "boolean"
              },
              "NetPhoneMultimediaMsg": {
                "type": "boolean"
              },
              "NetPhoneShortMsg": {
                "type": "boolean"
              },
              "NetPlatMega": {
                "type": "boolean"
              },
              "NetPlatShiSou": {
                "type": "boolean"
              },
              "NetPlatVVEye": {
                "type": "boolean"
              },
              "NetPlatXingWang": {
                "type": "boolean"
              },
              "NetRTSP": {
                "type": "boolean"
              },
              "NetSPVMN": {
                "type": "boolean"
              },
              "NetSPVMNSIP": {
                "type": "boolean"
              },
              "NetTUTKIOTC": {
                "type": "boolean"
              },
              "NetUPNP": {
                "type": "boolean"
              },
              "NetVPN": {
                "type": "boolean"
              },
              "NetWifi": {
                "type": "boolean"
              },
              "NetWifiMode": {
                "type": "boolean"
              },
              "OnvifPwdCheckout": {
                "type": "boolean"
              },
              "PlatFormGBeyes": {
                "type": "boolean"
              },
              "RTMP": {
                "type": "boolean"
              },
              "WifiModeSwitch": {
                "type": "boolean"
              },
              "XMHeartBeat": {
                "type": "boolean"
              }
            }
          },
          "OtherFunction": {
            "type": "object",
            "properties": {
              "AlterDigitalName": {
                "type": "boolean"
              },
              "DownLoadPause": {
                "type": "boolean"
              },
              "HddLowSpaceUseMB": {
                "type": "boolean"
              },
              "HideDigital": {
                "type": "boolean"
              },
              "MusicFilePlay": {
                "type": "boolean"
              },
              "NOHDDRECORD": {
                "type": "boolean"
              },
              "NotSupportAH": {
                "type": "boolean"
              },
              "NotSupportAV": {
                "type": "boolean"
              },
              "NotSupportTalk": {
                "type": "boolean"
              },
              "SDsupportRecord": {
                "type": "boolean"
              },
              "ShowAlarmLevelRegion": {
                "type": "boolean"
              },
              "ShowFalseCheckTime": {
                "type": "boolean"
              },
              "SupportAbnormitySendMail": {
                "type": "boolean"
              },
              "SupportAlarmLinkLight": {
                "type": "boolean"
              },
              "SupportAlarmVoiceTips": {
                "type": "boolean"
              },
              "SupportAudioFormat": {
                "type": "boolean"
              },
              "SupportBT": {
                "type": "boolean"
              },
              "SupportBallCameraTrackDetect": {
                "type": "boolean"
              },
              "SupportBulbAlarmLightOn": {
                "type": "boolean"
              },
              "SupportC7Platform": {
                "type": "boolean"
              },
              "SupportCamareStyle": {
                "type": "boolean"
              },
              "SupportCameraMotorCtrl": {
                "type": "boolean"
              },
              "SupportCameraWhiteLight": {
                "type": "boolean"
              },
              "SupportCfgCloudupgrade": {
                "type": "boolean"
              },
              "SupportCloseVoiceTip": {
                "type": "boolean"
              },
              "SupportCloudUpgrade": {
                "type": "boolean"
              },
              "SupportCommDataUpload": {
                "type": "boolean"
              },
              "SupportConsSensorAlarmLink": {
                "type": "boolean"
              },
              "SupportContinueUpgrade": {
                "type": "boolean"
              },
              "SupportCorridorMode": {
                "type": "boolean"
              },
              "SupportCustomOemInfo": {
                "type": "boolean"
              },
              "SupportDeviceInfoNew": {
                "type": "boolean"
              },
              "SupportDigitalEncode": {
                "type": "boolean"
              },
              "SupportDigitalPre": {
                "type": "boolean"
              },
              "SupportDimenCode": {
                "type": "boolean"
              },
              "SupportDoorLock": {
                "type": "boolean"
              },
              "SupportDoubleLightBoxCamera": {
                "type": "boolean"
              },
              "SupportDoubleLightBulb": {
                "type": "boolean"
              },
              "SupportEncodeAddBeep": {
                "type": "boolean"
              },
              "SupportFTPTest": {
                "type": "boolean"
              },
              "SupportFaceDetect": {
                "type": "boolean"
              },
              "SupportFeederFunction": {
                "type": "boolean"
              },
              "SupportFishEye": {
                "type": "boolean"
              },
              "SupportImpRecord": {
                "type": "boolean"
              },
              "SupportIntelligentPlayBack": {
                "type": "boolean"
              },
              "SupportLowLuxMode": {
                "type": "boolean"
              },
              "SupportMailTest": {
                "type": "boolean"
              },
              "SupportMaxPlayback": {
                "type": "boolean"
              },
              "SupportModifyFrontcfg": {
                "type": "boolean"
              },
              "SupportMusicLightBulb": {
                "type": "boolean"
              },
              "SupportNVR": {
                "type": "boolean"
              },
              "SupportNetLocalSearch": {
                "type": "boolean"
              },
              "SupportNetWorkMode": {
                "type": "boolean"
              },
              "SupportOSDInfo": {
                "type": "boolean"
              },
              "SupportOneKeyMaskVideo": {
                "type": "boolean"
              },
              "SupportOnvifClient": {
                "type": "boolean"
              },
              "SupportPOS": {
                "type": "boolean"
              },
              "SupportPTZTour": {
                "type": "boolean"
              },
              "SupportPWDSafety": {
                "type": "boolean"
              },
              "SupportPlateDetect": {
                "type": "boolean"
              },
              "SupportPlayBackExactSeek": {
                "type": "boolean"
              },
              "SupportPlaybackLocate": {
                "type": "boolean"
              },
              "SupportPtz360Spin": {
                "type": "boolean"
              },
              "SupportPtzIdleState": {
                "type": "boolean"
              },
              "SupportRPSVideo": {
                "type": "boolean"
              },
              "SupportRTSPClient": {
                "type": "boolean"
              },
              "SupportResumePtzState": {
                "type": "boolean"
              },
              "SupportSPVMNNasServer": {
                "type": "boolean"
              },
              "SupportSafetyEmail": {
                "type": "boolean"
              },
              "SupportSensorAbilitySetting": {
                "type": "boolean"
              },
              "SupportSetDigIP": {
                "type": "boolean"
              },
              "SupportSetHardwareAbility": {
                "type": "boolean"
              },
              "SupportSetPTZPresetAttribute": {
                "type": "boolean"
              },
              "SupportShowConnectStatus": {
                "type": "boolean"
              },
              "SupportShowProductType": {
                "type": "boolean"
              },
              "SupportSlowMotion": {
                "type": "boolean"
              },
              "SupportSmallChnTitleFont": {
                "type": "boolean"
              },
              "SupportSnapCfg": {
                "type": "boolean"
              },
              "SupportSnapSchedule": {
                "type": "boolean"
              },
              "SupportSnapV2Stream": {
                "type": "boolean"
              },
              "SupportSoftPhotosensitive": {
                "type": "boolean"
              },
              "SupportSplitControl": {
                "type": "boolean"
              },
              "SupportStatusLed": {
                "type": "boolean"
              },
              "SupportStorageFailReboot": {
                "type": "boolean"
              },
              "SupportStorageNAS": {
                "type": "boolean"
              },
              "SupportSwitchResolution": {
                "type": "boolean"
              },
              "SupportTextPassword": {
                "type": "boolean"
              },
              "SupportTimeZone": {
                "type": "boolean"
              },
              "SupportTimingSleep": {
                "type": "boolean"
              },
              "SupportUserProgram": {
                "type": "boolean"
              },
              "SupportWIFINVR": {
                "type": "boolean"
              },
              "SupportWriteLog": {
                "type": "boolean"
              },
              "Supportonviftitle": {
                "type": "boolean"
              },
              "SuppportChangeOnvifPort": {
                "type": "boolean"
              },
              "TitleAndStateUpload": {
                "type": "boolean"
              },
              "USBsupportRecord": {
                "type": "boolean"
              }
            }
          },
          "PreviewFunction": {
            "type": "object",
            "properties": {
              "GUISet": {
                "type": "boolean"
              },
              "Tour": {
                "type": "boolean"
              }
            }
          },
          "TipShow": {
            "type": "object",
            "properties": {
              "NoBeepTipShow": {
                "type": "boolean"
              },
              "NoDiskManagerButtonShow": {
                "type": "boolean"
              },
              "NoEmailTipShow": {
                "type": "boolean"
              },
              "NoFTPTipShow": {
                "type": "boolean"
              }
            }
          }
        }
      }
    }
  },
  "CHANNEL_ABILITY_GET": {
    "id": 1360,
    "type": "object",
    "properties": {
      "Name": {
        "type": "string"
      }
    }
  },
  "CHANNEL_ABILITY_GET_RSP": {
    "id": 1361,
    "commands": {
      "BlindCapability": {
        "type": "object",
        "properties": {
          "BlindCoverNum": {
            "type": "number"
          }
        }
      },
      "Camera": {
        "type": "object",
        "properties": {
          "Count": {
            "type": "number"
          },
          "ElecLevel": {
            "type": "number"
          },
          "IsFishLens": {
            "type": "number"
          },
          "Luminance": {
            "type": "number"
          },
          "Speeds": {
            "type": "array",
            "element": {
              "type": "string"
            }
          },
          "Status": {
            "type": "number"
          },
          "SupportIntellDoubleLight": {
            "type": "number"
          },
          "SupportPreventOverExpo": {
            "type": "number"
          },
          "Version": {
            "type": "string"
          }
        }
      },
      "MotionArea": {
        "type": "object",
        "properties": {
          "GridColumn": {
            "type": "number"
          },
          "GridRow": {
            "type": "number"
          }
        }
      },
      "MultiLanguage": {
        "type": "array",
        "element": {
          "type": "string"
        }
      },
      "MultiVstd": {
        "type": "string"
      },
      "SupportExtRecord": {
        "type": "object",
        "properties": {
          "AbilityPram": {
            "type": "string"
          }
        }
      },
      "SystemFunction": {
        "type": "object",
        "properties": {
          "AlarmFunction": {
            "type": "object",
            "properties": {
              "433Alarm": {
                "type": "boolean"
              },
              "AlarmConfig": {
                "type": "boolean"
              },
              "BlindDetect": {
                "type": "boolean"
              },
              "BlurCheck": {
                "type": "boolean"
              },
              "Consumer433Alarm": {
                "type": "boolean"
              },
              "ConsumerRemote": {
                "type": "boolean"
              },
              "HumanDection": {
                "type": "boolean"
              },
              "IPCAlarm": {
                "type": "boolean"
              },
              "LossDetect": {
                "type": "boolean"
              },
              "MotionDetect": {
                "type": "boolean"
              },
              "NetAbort": {
                "type": "boolean"
              },
              "NetAbortExtend": {
                "type": "boolean"
              },
              "NetAlarm": {
                "type": "boolean"
              },
              "NetIpConflict": {
                "type": "boolean"
              },
              "NewVideoAnalyze": {
                "type": "boolean"
              },
              "PIRAlarm": {
                "type": "boolean"
              },
              "SensorAlarmCenter": {
                "type": "boolean"
              },
              "SerialAlarm": {
                "type": "boolean"
              },
              "StorageFailure": {
                "type": "boolean"
              },
              "StorageLowSpace": {
                "type": "boolean"
              },
              "StorageNotExist": {
                "type": "boolean"
              },
              "VideoAnalyze": {
                "type": "boolean"
              }
            }
          },
          "CommFunction": {
            "type": "object",
            "properties": {
              "CommRS232": {
                "type": "boolean"
              },
              "CommRS485": {
                "type": "boolean"
              }
            }
          },
          "EncodeFunction": {
            "type": "object",
            "properties": {
              "CombineStream": {
                "type": "boolean"
              },
              "DoubleStream": {
                "type": "boolean"
              },
              "IFrameRange": {
                "type": "boolean"
              },
              "IntelligentEncode": {
                "type": "boolean"
              },
              "LowBitRate": {
                "type": "boolean"
              },
              "SmartH264": {
                "type": "boolean"
              },
              "SmartH264V2": {
                "type": "boolean"
              },
              "SnapStream": {
                "type": "boolean"
              },
              "WaterMark": {
                "type": "boolean"
              }
            }
          },
          "InputMethod": {
            "type": "object",
            "properties": {
              "NoSupportChinese": {
                "type": "boolean"
              }
            }
          },
          "MobileDVR": {
            "type": "object",
            "properties": {
              "CarPlateSet": {
                "type": "boolean"
              },
              "DVRBootType": {
                "type": "boolean"
              },
              "DelaySet": {
                "type": "boolean"
              },
              "GpsTiming": {
                "type": "boolean"
              },
              "StatusExchange": {
                "type": "boolean"
              }
            }
          },
          "NetServerFunction": {
            "type": "object",
            "properties": {
              "IPAdaptive": {
                "type": "boolean"
              },
              "MACProtocol": {
                "type": "boolean"
              },
              "MonitorPlatform": {
                "type": "boolean"
              },
              "NATProtocol": {
                "type": "boolean"
              },
              "Net3G": {
                "type": "boolean"
              },
              "Net4G": {
                "type": "boolean"
              },
              "NetARSP": {
                "type": "boolean"
              },
              "NetAlarmCenter": {
                "type": "boolean"
              },
              "NetAnJuP2P": {
                "type": "boolean"
              },
              "NetBaiduCloud": {
                "type": "boolean"
              },
              "NetBjlThy": {
                "type": "boolean"
              },
              "NetDAS": {
                "type": "boolean"
              },
              "NetDDNS": {
                "type": "boolean"
              },
              "NetDHCP": {
                "type": "boolean"
              },
              "NetDNS": {
                "type": "boolean"
              },
              "NetDataLink": {
                "type": "boolean"
              },
              "NetEmail": {
                "type": "boolean"
              },
              "NetFTP": {
                "type": "boolean"
              },
              "NetGlobalEyes": {
                "type": "boolean"
              },
              "NetGodEyeAlarm": {
                "type": "boolean"
              },
              "NetHMS": {
                "type": "boolean"
              },
              "NetIPFilter": {
                "type": "boolean"
              },
              "NetIPv6": {
                "type": "boolean"
              },
              "NetKaiCong": {
                "type": "boolean"
              },
              "NetKeyboard": {
                "type": "boolean"
              },
              "NetLocalSdkPlatform": {
                "type": "boolean"
              },
              "NetMidDAS": {
                "type": "boolean"
              },
              "NetMobile": {
                "type": "boolean"
              },
              "NetMobileWatch": {
                "type": "boolean"
              },
              "NetMutliCast": {
                "type": "boolean"
              },
              "NetNTP": {
                "type": "boolean"
              },
              "NetNat": {
                "type": "boolean"
              },
              "NetOpenVPN": {
                "type": "boolean"
              },
              "NetPMS": {
                "type": "boolean"
              },
              "NetPMSV2": {
                "type": "boolean"
              },
              "NetPPPoE": {
                "type": "boolean"
              },
              "NetPhoneMultimediaMsg": {
                "type": "boolean"
              },
              "NetPhoneShortMsg": {
                "type": "boolean"
              },
              "NetPlatMega": {
                "type": "boolean"
              },
              "NetPlatShiSou": {
                "type": "boolean"
              },
              "NetPlatVVEye": {
                "type": "boolean"
              },
              "NetPlatXingWang": {
                "type": "boolean"
              },
              "NetRTSP": {
                "type": "boolean"
              },
              "NetSPVMN": {
                "type": "boolean"
              },
              "NetSPVMNSIP": {
                "type": "boolean"
              },
              "NetTUTKIOTC": {
                "type": "boolean"
              },
              "NetUPNP": {
                "type": "boolean"
              },
              "NetVPN": {
                "type": "boolean"
              },
              "NetWifi": {
                "type": "boolean"
              },
              "NetWifiMode": {
                "type": "boolean"
              },
              "OnvifPwdCheckout": {
                "type": "boolean"
              },
              "PlatFormGBeyes": {
                "type": "boolean"
              },
              "RTMP": {
                "type": "boolean"
              },
              "WifiModeSwitch": {
                "type": "boolean"
              },
              "XMHeartBeat": {
                "type": "boolean"
              }
            }
          },
          "OtherFunction": {
            "type": "object",
            "properties": {
              "AlterDigitalName": {
                "type": "boolean"
              },
              "DownLoadPause": {
                "type": "boolean"
              },
              "HddLowSpaceUseMB": {
                "type": "boolean"
              },
              "HideDigital": {
                "type": "boolean"
              },
              "MusicFilePlay": {
                "type": "boolean"
              },
              "NOHDDRECORD": {
                "type": "boolean"
              },
              "NotSupportAH": {
                "type": "boolean"
              },
              "NotSupportAV": {
                "type": "boolean"
              },
              "NotSupportTalk": {
                "type": "boolean"
              },
              "SDsupportRecord": {
                "type": "boolean"
              },
              "ShowAlarmLevelRegion": {
                "type": "boolean"
              },
              "ShowFalseCheckTime": {
                "type": "boolean"
              },
              "SupportAbnormitySendMail": {
                "type": "boolean"
              },
              "SupportAlarmLinkLight": {
                "type": "boolean"
              },
              "SupportAlarmVoiceTips": {
                "type": "boolean"
              },
              "SupportAudioFormat": {
                "type": "boolean"
              },
              "SupportBT": {
                "type": "boolean"
              },
              "SupportBallCameraTrackDetect": {
                "type": "boolean"
              },
              "SupportBulbAlarmLightOn": {
                "type": "boolean"
              },
              "SupportC7Platform": {
                "type": "boolean"
              },
              "SupportCamareStyle": {
                "type": "boolean"
              },
              "SupportCameraMotorCtrl": {
                "type": "boolean"
              },
              "SupportCameraWhiteLight": {
                "type": "boolean"
              },
              "SupportCfgCloudupgrade": {
                "type": "boolean"
              },
              "SupportCloseVoiceTip": {
                "type": "boolean"
              },
              "SupportCloudUpgrade": {
                "type": "boolean"
              },
              "SupportCommDataUpload": {
                "type": "boolean"
              },
              "SupportConsSensorAlarmLink": {
                "type": "boolean"
              },
              "SupportContinueUpgrade": {
                "type": "boolean"
              },
              "SupportCorridorMode": {
                "type": "boolean"
              },
              "SupportCustomOemInfo": {
                "type": "boolean"
              },
              "SupportDeviceInfoNew": {
                "type": "boolean"
              },
              "SupportDigitalEncode": {
                "type": "boolean"
              },
              "SupportDigitalPre": {
                "type": "boolean"
              },
              "SupportDimenCode": {
                "type": "boolean"
              },
              "SupportDoorLock": {
                "type": "boolean"
              },
              "SupportDoubleLightBoxCamera": {
                "type": "boolean"
              },
              "SupportDoubleLightBulb": {
                "type": "boolean"
              },
              "SupportEncodeAddBeep": {
                "type": "boolean"
              },
              "SupportFTPTest": {
                "type": "boolean"
              },
              "SupportFaceDetect": {
                "type": "boolean"
              },
              "SupportFeederFunction": {
                "type": "boolean"
              },
              "SupportFishEye": {
                "type": "boolean"
              },
              "SupportImpRecord": {
                "type": "boolean"
              },
              "SupportIntelligentPlayBack": {
                "type": "boolean"
              },
              "SupportLowLuxMode": {
                "type": "boolean"
              },
              "SupportMailTest": {
                "type": "boolean"
              },
              "SupportMaxPlayback": {
                "type": "boolean"
              },
              "SupportModifyFrontcfg": {
                "type": "boolean"
              },
              "SupportMusicLightBulb": {
                "type": "boolean"
              },
              "SupportNVR": {
                "type": "boolean"
              },
              "SupportNetLocalSearch": {
                "type": "boolean"
              },
              "SupportNetWorkMode": {
                "type": "boolean"
              },
              "SupportOSDInfo": {
                "type": "boolean"
              },
              "SupportOneKeyMaskVideo": {
                "type": "boolean"
              },
              "SupportOnvifClient": {
                "type": "boolean"
              },
              "SupportPOS": {
                "type": "boolean"
              },
              "SupportPTZTour": {
                "type": "boolean"
              },
              "SupportPWDSafety": {
                "type": "boolean"
              },
              "SupportPlateDetect": {
                "type": "boolean"
              },
              "SupportPlayBackExactSeek": {
                "type": "boolean"
              },
              "SupportPlaybackLocate": {
                "type": "boolean"
              },
              "SupportPtz360Spin": {
                "type": "boolean"
              },
              "SupportPtzIdleState": {
                "type": "boolean"
              },
              "SupportRPSVideo": {
                "type": "boolean"
              },
              "SupportRTSPClient": {
                "type": "boolean"
              },
              "SupportResumePtzState": {
                "type": "boolean"
              },
              "SupportSPVMNNasServer": {
                "type": "boolean"
              },
              "SupportSafetyEmail": {
                "type": "boolean"
              },
              "SupportSensorAbilitySetting": {
                "type": "boolean"
              },
              "SupportSetDigIP": {
                "type": "boolean"
              },
              "SupportSetHardwareAbility": {
                "type": "boolean"
              },
              "SupportSetPTZPresetAttribute": {
                "type": "boolean"
              },
              "SupportShowConnectStatus": {
                "type": "boolean"
              },
              "SupportShowProductType": {
                "type": "boolean"
              },
              "SupportSlowMotion": {
                "type": "boolean"
              },
              "SupportSmallChnTitleFont": {
                "type": "boolean"
              },
              "SupportSnapCfg": {
                "type": "boolean"
              },
              "SupportSnapSchedule": {
                "type": "boolean"
              },
              "SupportSnapV2Stream": {
                "type": "boolean"
              },
              "SupportSoftPhotosensitive": {
                "type": "boolean"
              },
              "SupportSplitControl": {
                "type": "boolean"
              },
              "SupportStatusLed": {
                "type": "boolean"
              },
              "SupportStorageFailReboot": {
                "type": "boolean"
              },
              "SupportStorageNAS": {
                "type": "boolean"
              },
              "SupportSwitchResolution": {
                "type": "boolean"
              },
              "SupportTextPassword": {
                "type": "boolean"
              },
              "SupportTimeZone": {
                "type": "boolean"
              },
              "SupportTimingSleep": {
                "type": "boolean"
              },
              "SupportUserProgram": {
                "type": "boolean"
              },
              "SupportWIFINVR": {
                "type": "boolean"
              },
              "SupportWriteLog": {
                "type": "boolean"
              },
              "Supportonviftitle": {
                "type": "boolean"
              },
              "SuppportChangeOnvifPort": {
                "type": "boolean"
              },
              "TitleAndStateUpload": {
                "type": "boolean"
              },
              "USBsupportRecord": {
                "type": "boolean"
              }
            }
          },
          "PreviewFunction": {
            "type": "object",
            "properties": {
              "GUISet": {
                "type": "boolean"
              },
              "Tour": {
                "type": "boolean"
              }
            }
          },
          "TipShow": {
            "type": "object",
            "properties": {
              "NoBeepTipShow": {
                "type": "boolean"
              },
              "NoDiskManagerButtonShow": {
                "type": "boolean"
              },
              "NoEmailTipShow": {
                "type": "boolean"
              },
              "NoFTPTipShow": {
                "type": "boolean"
              }
            }
          }
        }
      }
    }
  },
  "PTZ_REQ": {
    "id": 1400
  },
  "PTZ_RSP": {
    "id": 1401
  },
  "MONITOR_REQ": {
    "id": 1410
  },
  "MONITOR_RSP": {
    "id": 1411
  },
  "MONITOR_DATA": {
    "id": 1412
  },
  "MONITOR_CLAIM": {
    "id": 1413,
    "commands": {
      "OPMonitor": {
        "type": "object",
        "properties": {
          "Action": {
            "type": "string"
          },
          "Parameter": {
            "type": "object",
            "properties": {
              "Channel": {
                "type": "number"
              },
              "CombinMode": {
                "type": "string"
              },
              "StreamType": {
                "type": "string"
              },
              "TransMode": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  },
  "MONITOR_CLAIM_RSP": {
    "id": 1414,
    "commands": {
      "OPMonitor": {
        "type": "null"
      }
    }
  },
  "PLAY_REQ": {
    "id": 1420
  },
  "PLAY_RSP": {
    "id": 1421
  },
  "PLAY_DATA": {
    "id": 1422
  },
  "PLAY_EOF": {
    "id": 1423
  },
  "PLAY_CLAIM": {
    "id": 1424
  },
  "PLAY_CLAIM_RSP": {
    "id": 1425
  },
  "DOWNLOAD_DATA": {
    "id": 1426
  },
  "TALK_REQ": {
    "id": 1430
  },
  "TALK_RSP": {
    "id": 1431
  },
  "TALK_CU_PU_DATA": {
    "id": 1432
  },
  "TALK_PU_CU_DATA": {
    "id": 1433
  },
  "TALK_CLAIM": {
    "id": 1434
  },
  "TALK_CLAIM_RSP": {
    "id": 1435
  },
  "FILESEARCH_REQ": {
    "id": 1440
  },
  "FILESEARCH_RSP": {
    "id": 1441
  },
  "LOGSEARCH_REQ": {
    "id": 1442,
    "commands": {
      "OPLogQuery": {
        "type": "object",
        "properties": {
          "BeginTime": {
            "type": "string"
          },
          "EndTime": {
            "type": "string"
          },
          "LogPosition": {
            "type": "number"
          },
          "Type": {
            "type": "string"
          }
        }
      }
    }
  },
  "LOGSEARCH_RSP": {
    "id": 1443,
    "commands": {
      "OPLogQuery": {
        "type": "array",
        "element": {
          "type": "object",
          "properties": {
            "Data": {
              "type": "string"
            },
            "Position": {
              "type": "number"
            },
            "Time": {
              "type": "string"
            },
            "Type": {
              "type": "string"
            },
            "User": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  "FILESEARCH_BYTIME_REQ": {
    "id": 1444
  },
  "FILESEARCH_BYTIME_RSP": {
    "id": 1445
  },
  "SYSMANAGER_REQ": {
    "id": 1450,
    "commands": {
      "OPDefaultConfig": {
        "type": "object",
        "properties": {
          "Account": {
            "type": "boolean"
          },
          "Alarm": {
            "type": "boolean"
          },
          "CameraPARAM": {
            "type": "boolean"
          },
          "CommPtz": {
            "type": "boolean"
          },
          "Encode": {
            "type": "boolean"
          },
          "Factory": {
            "type": "boolean"
          },
          "General": {
            "type": "boolean"
          },
          "NetCommon": {
            "type": "boolean"
          },
          "NetServer": {
            "type": "boolean"
          },
          "Preview": {
            "type": "boolean"
          },
          "Record": {
            "type": "boolean"
          }
        }
      },
      "OPMachine": {
        "type": "object",
        "properties": {
          "Action": {
            "type": "string"
          }
        }
      },
      "OPTimeSetting": {
        "type": "string"
      }
    }
  },
  "SYSMANAGER_RSP": {
    "id": 1451,
    "type": "object",
    "properties": {
      "Name": {
        "type": "string"
      }
    }
  },
  "TIMEQUERY_REQ": {
    "id": 1452,
    "commands": {
      "OPTimeQuery": {
        "type": "null"
      }
    }
  },
  "TIMEQUERY_RSP": {
    "id": 1453,
    "commands": {
      "OPTimeQuery": {
        "type": "string"
      }
    }
  },
  "DISKMANAGER_REQ": {
    "id": 1460
  },
  "DISKMANAGER_RSP": {
    "id": 1461
  },
  "FULLAUTHORITYLIST_GET": {
    "id": 1470
  },
  "FULLAUTHORITYLIST_GET_RSP": {
    "id": 1471,
    "type": "object",
    "properties": {
      "AuthorityList": {
        "type": "array",
        "element": {
          "type": "string"
        }
      }
    }
  },
  "USERS_GET": {
    "id": 1472
  },
  "USERS_GET_RSP": {
    "id": 1473,
    "type": "object",
    "properties": {
      "Users": {
        "type": "array",
        "element": {
          "type": "object",
          "properties": {
            "AuthorityList": {
              "type": "array",
              "element": {
                "type": "string"
              }
            },
            "Group": {
              "type": "string"
            },
            "Memo": {
              "type": "string"
            },
            "Name": {
              "type": "string"
            },
            "NoMD5": {
              "type": "object",
              "properties": {}
            },
            "Password": {
              "type": "string"
            },
            "Reserved": {
              "type": "boolean"
            },
            "Sharable": {
              "type": "boolean"
            }
          }
        }
      }
    }
  },
  "GROUPS_GET": {
    "id": 1474
  },
  "GROUPS_GET_RSP": {
    "id": 1475,
    "type": "object",
    "properties": {
      "Groups": {
        "type": "array",
        "element": {
          "type": "object",
          "properties": {
            "AuthorityList": {
              "type": "array",
              "element": {
                "type": "string"
              }
            },
            "Memo": {
              "type": "string"
            },
            "Name": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  "ADDGROUP_REQ": {
    "id": 1476,
    "commands": {
      "Group": {
        "type": "object",
        "properties": {
          "AuthorityList": {
            "type": "array",
            "element": {
              "type": "string"
            }
          },
          "Memo": {
            "type": "string"
          },
          "Name": {
            "type": "string"
          }
        }
      }
    }
  },
  "ADDGROUP_RSP": {
    "id": 1477,
    "type": "object",
    "properties": {
      "Name": {
        "type": "string"
      }
    }
  },
  "MODIFYGROUP_REQ": {
    "id": 1478,
    "type": "object",
    "properties": {
      "Group": {
        "type": "object",
        "properties": {
          "AuthorityList": {
            "type": "array",
            "element": {
              "type": "string"
            }
          },
          "Memo": {
            "type": "string"
          },
          "Name": {
            "type": "string"
          }
        }
      },
      "GroupName": {
        "type": "string"
      }
    }
  },
  "MODIFYGROUP_RSP": {
    "id": 1479,
    "type": "object",
    "properties": {
      "Name": {
        "type": "string"
      }
    }
  },
  "DELETEGROUP_REQ": {
    "id": 1480,
    "type": "object",
    "properties": {
      "Name": {
        "type": "string"
      }
    }
  },
  "DELETEGROUP_RSP": {
    "id": 1481,
    "type": "null"
  },
  "ADDUSER_REQ": {
    "id": 1482,
    "commands": {
      "User": {
        "type": "object",
        "properties": {
          "AuthorityList": {
            "type": "array",
            "element": {
              "type": "string"
            }
          },
          "Group": {
            "type": "string"
          },
          "Memo": {
            "type": "string"
          },
          "Name": {
            "type": "string"
          },
          "Password": {
            "type": "string"
          },
          "Reserved": {
            "type": "boolean"
          },
          "Sharable": {
            "type": "boolean"
          }
        }
      }
    }
  },
  "ADDUSER_RSP": {
    "id": 1483,
    "type": "object",
    "properties": {
      "Name": {
        "type": "string"
      }
    }
  },
  "MODIFYUSER_REQ": {
    "id": 1484,
    "type": "object",
    "properties": {
      "User": {
        "type": "object",
        "properties": {
          "AuthorityList": {
            "type": "array",
            "element": {
              "type": "string"
            }
          },
          "Group": {
            "type": "string"
          },
          "Memo": {
            "type": "string"
          },
          "Name": {
            "type": "string"
          },
          "Password": {
            "type": "string"
          },
          "Reserved": {
            "type": "boolean"
          },
          "Sharable": {
            "type": "boolean"
          }
        }
      },
      "UserName": {
        "type": "string"
      }
    }
  },
  "MODIFYUSER_RSP": {
    "id": 1485,
    "type": "object",
    "properties": {
      "Name": {
        "type": "string"
      }
    }
  },
  "DELETEUSER_REQ": {
    "id": 1486,
    "type": "object",
    "properties": {
      "Name": {
        "type": "string"
      }
    }
  },
  "DELETEUSER_RSP": {
    "id": 1487,
    "type": "null"
  },
  "MODIFYPASSWORD_REQ": {
    "id": 1488,
    "type": "object",
    "properties": {
      "EncryptType": {
        "type": "string"
      },
      "NewPassWord": {
        "type": "string"
      },
      "PassWord": {
        "type": "string"
      },
      "UserName": {
        "type": "string"
      }
    }
  },
  "MODIFYPASSWORD_RSP": {
    "id": 1489,
    "type": "object",
    "properties": {
      "Name": {
        "type": "string"
      }
    }
  },
  "GUARD_REQ": {
    "id": 1500,
    "type": "object",
    "properties": {
      "Name": {
        "type": "string"
      }
    }
  },
  "GUARD_RSP": {
    "id": 1501,
    "type": "object",
    "properties": {
      "Name": {
        "type": "string"
      }
    }
  },
  "UNGUARD_REQ": {
    "id": 1502,
    "type": "object",
    "properties": {
      "Name": {
        "type": "string"
      }
    }
  },
  "UNGUARD_RSP": {
    "id": 1503
  },
  "ALARM_REQ": {
    "id": 1504,
    "commands": {
      "AlarmInfo": {
        "type": "object",
        "properties": {
          "Channel": {
            "type": "number"
          },
          "Event": {
            "type": "string"
          },
          "StartTime": {
            "type": "string"
          },
          "Status": {
            "type": "string"
          }
        }
      }
    }
  },
  "ALARM_RSP": {
    "id": 1505
  },
  "NET_ALARM_REQ": {
    "id": 1506
  },
  "NET_ALARM_REQ2": {
    "id": 1507
  },
  "ALARMCENTER_MSG_REQ": {
    "id": 1508
  },
  "UPGRADE_REQ": {
    "id": 1520
  },
  "UPGRADE_RSP": {
    "id": 1521
  },
  "UPGRADE_DATA": {
    "id": 1522
  },
  "UPGRADE_DATA_RSP": {
    "id": 1523
  },
  "UPGRADE_PROGRESS": {
    "id": 1524
  },
  "UPGRADE_INFO_REQ": {
    "id": 1525
  },
  "UPGRADE_INFO_RSQ": {
    "id": 1526
  },
  "IPSEARCH_REQ": {
    "id": 1530
  },
  "IPSEARCH_RSP": {
    "id": 1531
  },
  "IP_SET_REQ": {
    "id": 1532
  },
  "IP_SET_RSP": {
    "id": 1533
  },
  "CONFIG_IMPORT_REQ": {
    "id": 1540
  },
  "CONFIG_IMPORT_RSP": {
    "id": 1541,
    "type": "object",
    "properties": {
      "Name": {
        "type": "string"
      }
    }
  },
  "CONFIG_EXPORT_REQ": {
    "id": 1542,
    "type": "object",
    "properties": {
      "Name": {
        "type": "string"
      }
    }
  },
  "CONFIG_EXPORT_RSP": {
    "id": 1543
  },
  "LOG_EXPORT_REQ": {
    "id": 1544
  },
  "LOG_EXPORT_RSP": {
    "id": 1545
  },
  "NET_KEYBOARD_REQ": {
    "id": 1550
  },
  "NET_KEYBOARD_RSP": {
    "id": 1551
  },
  "NET_SNAP_REQ": {
    "id": 1560
  },
  "NET_SNAP_RSP": {
    "id": 1561
  },
  "SET_IFRAME_REQ": {
    "id": 1562
  },
  "SET_IFRAME_RSP": {
    "id": 1563
  },
  "RS232_READ_REQ": {
    "id": 1570
  },
  "RS232_READ_RSP": {
    "id": 1571
  },
  "RS232_WRITE_REQ": {
    "id": 1572
  },
  "RS232_WRITE_RSP": {
    "id": 1573
  },
  "RS485_READ_REQ": {
    "id": 1574
  },
  "RS485_READ_RSP": {
    "id": 1575
  },
  "RS485_WRITE_REQ": {
    "id": 1576
  },
  "RS485_WRITE_RSP": {
    "id": 1577
  },
  "TRANSPARENT_COMM_REQ": {
    "id": 1578
  },
  "TRANSPARENT_COMM_RSP": {
    "id": 1579
  },
  "RS485_TRANSPARENT_DATA_REQ": {
    "id": 1580
  },
  "RS485_TRANSPARENT_DATA_RSP": {
    "id": 1581
  },
  "RS232_TRANSPARENT_DATA_REQ": {
    "id": 1582
  },
  "RS232_TRANSPARENT_DATA_RSP": {
    "id": 1583
  },
  "SYNC_TIME_REQ": {
    "id": 1590
  },
  "SYNC_TIME_RSP": {
    "id": 1591
  },
  "PHOTO_GET_REQ": {
    "id": 1600
  },
  "PHOTO_GET_RSP": {
    "id": 1601
  },
  "UPDATE_REQ": {
    "id": 2000,
    "commands": {
      "OPVersionList": {
        "type": "null"
      }
    }
  },
  "UPDATE_RES": {
    "id": 2001,
    "commands": {
      "OPVersionList": {
        "type": "array",
        "element": {
          "type": "object",
          "properties": {
            "Length": {
              "type": "number"
            },
            "VersionDate": {
              "type": "string"
            },
            "VersionName": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  "FTP_TEST_REQ": {
    "id": 2008,
    "commands": {
      "OPFTPTest": {
        "type": "object",
        "properties": {
          "Directory": {
            "type": "string"
          },
          "Enable": {
            "type": "boolean"
          },
          "MaxFileLen": {
            "type": "number"
          },
          "Server": {
            "type": "object",
            "properties": {
              "Address": {
                "type": "string"
              },
              "Anonymity": {
                "type": "boolean"
              },
              "Name": {
                "type": "string"
              },
              "Password": {
                "type": "string"
              },
              "Port": {
                "type": "number"
              },
              "UserName": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  },
  "FTP_TEST_RES": {
    "id": 2009
  }
})