require('dotenv').config()

function sendFoodParser (foodResult, image) {
  return {
      "version": "2.0",
      "template": {
          "outputs": [
            {
                "simpleImage": {
                    "imageUrl": `${image}`,
                    "altText": "image"
                }
            },
            {
              "simpleText": {
                "text": `${foodResult}`
              }
            },
          ],
          "quickReplies": [
            {
              "action": "block",
              "label": "이전",
              "messageText": `오늘의 식단(학식)보기`,
              "blockId": "5c612b6905aaa7668df7bfc1",
            },
            {
              "action": "block",
              "label": "🏠",
              "messageText": `🏠`,
              "blockId": "5c6aceb7384c5541a0ee5bcc",
            },
          ],
      }
  };
}

function sendLibraryRestSeat (restSeat, totalSeat) {
  return {
    "version": "2.0",
    "template": {
      "outputs": [
        {
          "simpleText": {
            "text": `(잔여 좌석 / 총 좌석)`
          }
        },
        {
          "listCard": {
            "header": {
              "title": "중앙도서관 여석 현황",
              "imageUrl": `${process.env.NOTICE_IMAGE}`
            },
            "items": [
              {
                "title": "형설열람석",
                "description": `${restSeat[0]} / ${totalSeat[0]}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
              },
              {
                "title": "탐구열람실",
                "description": `${restSeat[1]} / ${totalSeat[1]}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
              },
              {
                "title": "나눔열람실",
                "description": `${restSeat[2]} / ${totalSeat[2]}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
              },
              {
                "title": "창의열람실",
                "description": `${restSeat[3]} / ${totalSeat[3]}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
              },
              {
                "title": "노트북열람실",
                "description": `${restSeat[4]} / ${totalSeat[4]}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
              }
            ],
            "buttons": [
              {
                "label": "중앙도서관 예약하기",
                "action": "webLink",
                "webLinkUrl": "http://lib.gachon.ac.kr/local/html/seatReservation"
              }
            ]
          }
        }
      ],
      "quickReplies": [
        {
          "action": "block",
          "label": "이전",
          "messageText": `도서관 현황`,
          "blockId": "5c66836ae821274ba7892e1d",
        },
        {
          "action": "block",
          "label": "🏠",
          "messageText": `🏠`,
          "blockId": "5c6aceb7384c5541a0ee5bcc",
        },
      ],
    }
  };
}

function sendNoticeParse (noticeArray) {
  return {
    "version": "2.0",
    "template": {
      "outputs": [
        {
          "listCard": {
            "header": {
              "title": "공지사항",
              "imageUrl": `${process.env.NOTICE_IMAGE}`,
            },
            "items": [
              {
                "title": `${noticeArray[0].title}`,
                "description": `${noticeArray[0].date}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
                "link": {
                  "web": `${noticeArray[0].url}`
                }
              },
              {
                "title": `${noticeArray[1].title}`,
                "description": `${noticeArray[1].date}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
                "link": {
                  "web": `${noticeArray[1].url}`
                }
              },
              {
                "title": `${noticeArray[2].title}`,
                "description": `${noticeArray[2].date}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
                "link": {
                  "web": `${noticeArray[2].url}`
                }
              },
              {
                "title": `${noticeArray[3].title}`,
                "description": `${noticeArray[3].date}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
                "link": {
                  "web": `${noticeArray[3].url}`
                }
              },
              {
                "title": `${noticeArray[4].title}`,
                "description": `${noticeArray[4].date}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
                "link": {
                  "web": `${noticeArray[4].url}`
                }
              }
            ],
            "buttons": [
              {
                "label": "공지사항 더보기",
                "action": "webLink",
                "webLinkUrl": "http://m.gachon.ac.kr/gachon/notice.jsp?boardType_seq=358"
              }
            ]
          }
        }
      ],
      "quickReplies": [
        {
          "action": "block",
          "label": "이전",
          "messageText": `학사`,
          "blockId": "5c6acb2f384c5541a0ee5bc1",
        },
        {
          "action": "block",
          "label": "🏠",
          "messageText": `🏠`,
          "blockId": "5c6aceb7384c5541a0ee5bcc",
        },
      ],
    }
  };
}

function sendScholarParse (noticeArray) {
  return {
    "version": "2.0",
    "template": {
      "outputs": [
        {
          "listCard": {
            "header": {
              "title": "장학소식",
              "imageUrl": `${process.env.NOTICE_IMAGE}`,
            },
            "items": [
              {
                "title": `${noticeArray[0].title}`,
                "description": `${noticeArray[0].date}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
                "link": {
                  "web": `${noticeArray[0].url}`
                }
              },
              {
                "title": `${noticeArray[1].title}`,
                "description": `${noticeArray[1].date}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
                "link": {
                  "web": `${noticeArray[1].url}`
                }
              },
              {
                "title": `${noticeArray[2].title}`,
                "description": `${noticeArray[2].date}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
                "link": {
                  "web": `${noticeArray[2].url}`
                }
              },
              {
                "title": `${noticeArray[3].title}`,
                "description": `${noticeArray[3].date}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
                "link": {
                  "web": `${noticeArray[3].url}`
                }
              },
              {
                "title": `${noticeArray[4].title}`,
                "description": `${noticeArray[4].date}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
                "link": {
                  "web": `${noticeArray[4].url}`
                }
              }
            ],
            "buttons": [
              {
                "label": "장학소식 더보기",
                "action": "webLink",
                "webLinkUrl": "http://m.gachon.ac.kr/gachon/notice.jsp?boardType_seq=361"
              }
            ]
          }
        }
      ],
      "quickReplies": [
        {
          "action": "block",
          "label": "이전",
          "messageText": `학사`,
          "blockId": "5c6acb2f384c5541a0ee5bc1",
        },
        {
          "action": "block",
          "label": "🏠",
          "messageText": `🏠`,
          "blockId": "5c6aceb7384c5541a0ee5bcc",
        },
      ],
    }
  };
}

function sendGetWeather (weather, image) {
  return {
    "version": "2.0",
    "template": {
      "outputs": [
        {
          "simpleText": {
            "text": `${weather.time} 기준 가천대학교의 날씨입니다!`
          }
        },
        {
          "carousel": {
            "type": "basicCard",
            "items": [
              {
                "title": `${weather.name}`,
                "description": `현재기온: ${weather.tc} ℃\n오늘의 최저기온: ${weather.tmin} ℃\n오늘의 최고기온: ${weather.tmax} ℃\n습도: ${weather.humidity} %`,
                "thumbnail": {
                  "imageUrl": `${image}`
                },
              },
            ]
          }
        }
      ],
      "quickReplies": [
        {
          "action": "block",
          "label": "🏠",
          "messageText": `🏠`,
          "blockId": "5c6aceb7384c5541a0ee5bcc",
        },
      ],
    }
  };
}

function sendGetAir (air, pm10grade, pm25grade, image) {
  return {
    "version": "2.0",
    "template": {
      "outputs": [
        {
          "simpleText": {
            "text": `${air.time} 기준 미세먼지 지수입니다!(성남시 상대원동 측정소)`
          }
        },
        {
          "carousel": {
            "type": "basicCard",
            "items": [
              {
                "title": `${pm10grade}`,
                "description": `미세먼지 지수: ${air.pm_10} (pm10)\n\n초미세먼지: ${pm25grade}\n초미세먼지 지수: ${air.pm_25} (pm25)`,
                "thumbnail": {
                  "imageUrl": `${image}`
                },
              },
            ]
          }
        }
      ],
      "quickReplies": [
        {
          "action": "block",
          "label": "🏠",
          "messageText": `🏠`,
          "blockId": "5c6aceb7384c5541a0ee5bcc",
        },
      ],
    }
  };
}

function sendLibraryInit () {
  return {
    "version": "2.0",
    "template": {
      "outputs": [
        {
          "simpleText": {
            "text": `도서관 여석조회 입니다! 조회를 원하는 도서관을 선택해주세요!`
          }
        },
      ],
      "quickReplies": [
        {
          "action": "block",
          "label": "중앙도서관",
          "blockId": "5c612d2b5f38dd58392369f1",
        },
        {
          "action": "block",
          "label": "전자정보도서관",
          "blockId": "5c66811f384c5541a0ee4f87",
        },
        {
          "action": "block",
          "label": "🏠",
          "messageText": `🏠`,
          "blockId": "5c66b0f65f38dd01ebc06a44",
        },
      ],
    }
  };
}

function sendElecLibraryInit () {
  return {
    "version": "2.0",
    "template": {
      "outputs": [
        {
          "simpleText": {
            "text": `전자정보도서관 여석조회 입니다! 1층과 2층중에 선택해주세요!`
          }
        },
      ],
      "quickReplies": [
        {
          "action": "block",
          "label": "1F",
          "blockId": "5c6680c305aaa75509ea57ec",
        },
        {
          "action": "block",
          "label": "2F",
          "blockId": "5c66810b5f38dd01ebc06976",
        },
        {
          "action": "block",
          "label": "이전",
          "blockId": "5c66836ae821274ba7892e1d",
        },
        {
          "action": "block",
          "label": "🏠",
          "messageText": `🏠`,
          "blockId": "5c66b0f65f38dd01ebc06a44",
        },
      ],
    }
  };
}

function sendElecLibrary1F (multiView, multiEdit, congressEdit, infoSearch, notebook) {
  return {
    "version": "2.0",
    "template": {
      "outputs": [
        {
          "simpleText": {
            "text": `30분 단위로 예약 가능 좌석을 조회합니다.\n예) 14:51 -> 15:00~15:30 예약가능 좌석 조회\n(잔여 좌석 / 총 좌석)`
          }
        },
        {
          "listCard": {
            "header": {
              "title": "전자정보도서관 1F 여석 현황",
              "imageUrl": `${process.env.NOTICE_IMAGE}`,
            },
            "items": [
              {
                "title": "멀티미디어열람석",
                "description": `${22 - multiView} / 22`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
              },
              {
                "title": "멀티미디어편집",
                "description": `${8 - multiEdit} / 8`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
              },
              {
                "title": "국회자료편집",
                "description": `${8 - congressEdit} / 8`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
              },
              {
                "title": "정보검색",
                "description": `${32 - infoSearch} / 32`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
              },
              {
                "title": "노트북열람석",
                "description": `${15 - notebook} / 15`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
              }
            ],
            "buttons": [
              {
                "label": "전자정보도서관 예약하기",
                "action": "webLink",
                "webLinkUrl": "http://lib.gachon.ac.kr/local/html/seatReservation"
              }
            ]
          }
        }
      ],
      "quickReplies": [
        {
          "action": "block",
          "label": "이전",
          "messageText": `전자정보도서관 여석 조회`,
          "blockId": "5c66811f384c5541a0ee4f87",
        },
        {
          "action": "block",
          "label": "🏠",
          "messageText": `🏠`,
          "blockId": "5c6aceb7384c5541a0ee5bcc",
        },
      ],
    }
  };
}

function sendElecLibrary2F (general, notebook) {
  return {
    "version": "2.0",
    "template": {
      "outputs": [
        {
          "simpleText": {
            "text": `30분 단위로 예약 가능 좌석을 조회합니다.\n예) 14:51 -> 15:00~15:30 예약가능 좌석 조회\n(잔여 좌석 / 총 좌석)`
          }
        },
        {
          "listCard": {
            "header": {
              "title": "전자정보도서관 2F 여석 현황",
              "imageUrl": `${process.env.NOTICE_IMAGE}`,
            },
            "items": [
              {
                "title": "일반열람실",
                "description": `${84 - general} / 84`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
              },
              {
                "title": "노트북열람실",
                "description": `${54 - notebook} / 54`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
              },
            ],
            "buttons": [
              {
                "label": "전자정보도서관 예약하기",
                "action": "webLink",
                "webLinkUrl": "http://lib.gachon.ac.kr/local/html/seatReservation"
              }
            ]
          }
        }
      ],
      "quickReplies": [
        {
          "action": "block",
          "label": "이전",
          "messageText": `전자정보도서관 여석 조회`,
          "blockId": "5c66811f384c5541a0ee4f87",
        },
        {
          "action": "block",
          "label": "🏠",
          "messageText": `🏠`,
          "blockId": "5c6aceb7384c5541a0ee5bcc",
        },
      ],
    }
  };
}

function sendMajorNoticeParse (userMajor, noticeArray, major) {
  return {
    "version": "2.0",
    "template": {
      "outputs": [
        {
          "listCard": {
            "header": {
              "title": `${userMajor} 공지사항`,
              "imageUrl": `${process.env.NOTICE_IMAGE}`,
            },
            "items": [
              {
                "title": `${noticeArray[0].title}`,
                "description": `${noticeArray[0].date}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
                "link": {
                  "web": `${noticeArray[0].url}`
                }
              },
              {
                "title": `${noticeArray[1].title}`,
                "description": `${noticeArray[1].date}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
                "link": {
                  "web": `${noticeArray[1].url}`
                }
              },
              {
                "title": `${noticeArray[2].title}`,
                "description": `${noticeArray[2].date}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
                "link": {
                  "web": `${noticeArray[2].url}`
                }
              },
              {
                "title": `${noticeArray[3].title}`,
                "description": `${noticeArray[3].date}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
                "link": {
                  "web": `${noticeArray[3].url}`
                }
              },
              {
                "title": `${noticeArray[4].title}`,
                "description": `${noticeArray[4].date}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
                "link": {
                  "web": `${noticeArray[4].url}`
                }
              }
            ],
            "buttons": [
              {
                "label": "공지사항 더보기",
                "action": "webLink",
                "webLinkUrl": `${major.notice}`
              }
            ]
          }
        }
      ],
      "quickReplies": [
        {
          "action": "block",
          "label": "이전",
          "messageText": `학과`,
          "blockId": "5c6ab205e821274ba7893ab5",
        },
        {
          "action": "block",
          "label": "🏠",
          "messageText": `🏠`,
          "blockId": "5c6aceb7384c5541a0ee5bcc",
        },
      ],
    }
  };
}

function sendMajorParse (userMajor, major) {
  return {
    "version": "2.0",
    "template": {
      "outputs": [
        {
          "basicCard": {
            "title": `${userMajor}`,
            "thumbnail": {
              "imageUrl": `https://s3.ap-northeast-2.amazonaws.com/gachonbot/vision.png`,
            },
            "buttons": [
              {
                "action": "phone",
                "label": "과사무실 전화하기",
                "phoneNumber": `${major.number}`,
                "messageText": `${userMajor} 과사무실 전화하기`,
              },
              {
                "action":  "block",
                "label": "학과 공지사항",
                "messageText": `${userMajor} 공지사항`,
                "blockId": `5c6aa735384c5541a0ee5b81`,
              }
            ]
          }
        }
      ],
      "quickReplies": [
        {
          "action": "block",
          "label": "이전",
          "messageText": `학사`,
          "blockId": "5c6acb2f384c5541a0ee5bc1",
        },
        {
          "action": "block",
          "label": "🏠",
          "messageText": `🏠`,
          "blockId": "5c6aceb7384c5541a0ee5bcc",
        },
      ],
    }
  };
}

function sendMajor(text, ...args) {
  let outputJson = {
    "version": "2.0",
    "template": {
      "outputs": [
        {
          "simpleText": {
            "text": `${text} 내 해당되는 학과를 선택해주세요!`
          }
        },
      ],
      "quickReplies": [
      ],
    }
  };

  function addQuickReplyMajor (name, block_id) {
    return {
      "action": "block",
      "label": `${name}`,
      "messageText": `${name}`,
      "blockId": `${block_id}`,
      "extra": {
        "major": `${name}`
      }
    };
  }

  for(let i = 0; i < args.length; i += 1) {
    outputJson.template.quickReplies[i] = addQuickReplyMajor(args[i], '5c697eab05aaa75509ea5cbe');
  }
  outputJson.template.quickReplies[args.length] = addQuickReplyMajor('이전', '5c6986d45f38dd01ebc06dd8');

  return outputJson;

}

function sendCollege() {
  let collegeArray = ['경영대학','사회과학대학','인문대학','법과대학','공과대학','바이오나노대학','IT대학','한의과대학','예술대학'];
  let outputJson = {
    "version": "2.0",
    "template": {
      "outputs": [
        {
          "simpleText": {
            "text": `해당되는 단과대학을 선택해주세요!`
          }
        },
      ],
      "quickReplies": [
      ],
    }
  };

  function addQuickReplyCollege (name, block_id) {
    return {
      "action": "block",
      "label": `${name}`,
      "messageText": `${name}`,
      "blockId": `${block_id}`,
      "extra": {
        "college": `${name}`
      }
    };
  }

  for(let i = 0; i < collegeArray.length; i += 1) {
    outputJson.template.quickReplies[i] = addQuickReplyCollege(collegeArray[i], '5c69875de821274ba78931b6');
  }
  outputJson.template.quickReplies[collegeArray.length] = addQuickReplyCollege('이전', '5c6aceb7384c5541a0ee5bcc');

  return outputJson;

}

function sendEngiMajor() {
  let engiArray = ['도시계획학과','조경학과','실내건축학과','건축학과','건축공학과','전기공학과','설비소방학과','화공생명공학과'];
  let outputJson = {
    "version": "2.0",
    "template": {
      "outputs": [
        {
          "simpleText": {
            "text": `공과대학 내 해당되는 학과를 선택해주세요!`
          }
        },
      ],
      "quickReplies": [
      ],
    }
  };

  function addQuickReplyMajor (name, block_id) {
    return {
      "action": "block",
      "label": `${name}`,
      "messageText": `${name}`,
      "blockId": `${block_id}`,
      "extra": {
        "major": `${name}`
      }
    };
  }

  for(let i = 0; i < engiArray.length; i += 1) {
    outputJson.template.quickReplies[i] = addQuickReplyMajor(engiArray[i], '5c697eab05aaa75509ea5cbe');
  }
  outputJson.template.quickReplies[engiArray.length] = {
    "action": "block",
    "label": '학과 더보기',
    "messageText": '공과대학 학과 더보기',
    "blockId": '5c69875de821274ba78931b6',
    "extra": {
      "college": '공과대학2'
    }
  };
  outputJson.template.quickReplies[engiArray.length+1] = addQuickReplyMajor('이전', '5c6986d45f38dd01ebc06dd8');

  return outputJson;
}

function sendEngiMajorSecond() {
  let secondEngiArray = ['기계공학과','토목환경공학과','산업경영학과','신소재공학과'];
  let outputJson = {
    "version": "2.0",
    "template": {
      "outputs": [
        {
          "simpleText": {
            "text": `공과대학 내 해당되는 학과를 선택해주세요!`
          }
        },
      ],
      "quickReplies": [
      ],
    }
  };

  function addQuickReplyMajor (name, block_id) {
    return {
      "action": "block",
      "label": `${name}`,
      "messageText": `${name}`,
      "blockId": `${block_id}`,
      "extra": {
        "major": `${name}`
      }
    };
  }

  for(let i = 0; i < secondEngiArray.length; i += 1) {
    outputJson.template.quickReplies[i] = addQuickReplyMajor(secondEngiArray[i], '5c697eab05aaa75509ea5cbe');
  }
  outputJson.template.quickReplies[secondEngiArray.length] = {
    "action": "block",
    "label": '이전 학과',
    "messageText": '공과대학',
    "blockId": '5c69875de821274ba78931b6',
    "extra": {
      "college": '공과대학'
    }
  };

  return outputJson;
}

function sendScheduleByMonth (month, result) {
  return {
      "version": "2.0",
      "template": {
          "outputs": [
              {
                "basicCard": {
                  "title": `${month}월 학사일정`,
                  "description": `${result}`,
                  "thumbnail": {
                    "imageUrl": `https://s3.ap-northeast-2.amazonaws.com/gachonbot/vision.png`,
                  },
                }
              }
          ],
          "quickReplies": [
            {
              "action": "block",
              "label": "이전",
              "messageText": `학사일정`,
              "blockId": "5c6ffa1105aaa75509ea8c3d",
            },
            {
              "action": "block",
              "label": "🏠",
              "messageText": `🏠`,
              "blockId": "5c6aceb7384c5541a0ee5bcc",
            },
          ],
      }
  };
}

function sendScheduleByMonthInit() {
  let collegeArray = ['1','2','3','4','5','6','7','8','9'];
  let outputJson = {
    "version": "2.0",
    "template": {
      "outputs": [
        {
          "simpleText": {
            "text": `해당되는 월을 선택해주세요!`
          }
        },
      ],
      "quickReplies": [
      ],
    }
  };

  function addQuickReplyMonth (name, block_id) {
    return {
      "action": "block",
      "label": `${name}월`,
      "messageText": `${name}월`,
      "blockId": `${block_id}`,
      "extra": {
        "month": `${name}`
      }
    };
  }

  for(let i = 0; i < collegeArray.length; i += 1) {
    outputJson.template.quickReplies[i] = addQuickReplyMonth(collegeArray[i], '5c6ff96a5f38dd01ebc0a259');
  }
  outputJson.template.quickReplies[collegeArray.length] = {
    "action": "block",
    "label": '다음',
    "messageText": '다음',
    "blockId": '5c6ff9565f38dd01ebc0a257',
  };

  return outputJson;
}

function sendScheduleByMonthInit2() {
  let collegeArray = ['10','11','12'];
  let outputJson = {
    "version": "2.0",
    "template": {
      "outputs": [
        {
          "simpleText": {
            "text": `해당되는 월을 선택해주세요!`
          }
        },
      ],
      "quickReplies": [
      ],
    }
  };

  function addQuickReplyMonth (name, block_id) {
    return {
      "action": "block",
      "label": `${name}월`,
      "messageText": `${name}월`,
      "blockId": `${block_id}`,
      "extra": {
        "month": `${name}`
      }
    };
  }

  for(let i = 0; i < collegeArray.length; i += 1) {
    outputJson.template.quickReplies[i] = addQuickReplyMonth(collegeArray[i], '5c6ff96a5f38dd01ebc0a259');
  }
  outputJson.template.quickReplies[collegeArray.length] = {
    "action": "block",
    "label": '이전',
    "messageText": '이전',
    "blockId": '5c6ff94905aaa75509ea8c2b',
  };

  return outputJson;
}

function sendSearchSchedule (schedule) {
  return {
    "version": "2.0",
    "template": {
      "outputs": [
        {
          "simpleText": {
            "text": `관련도가 높은 상위 3개의 학사일정 입니다!\n\n${schedule[0].title}\n${schedule[0].date}\n\n${schedule[1].title}\n${schedule[1].date}\n\n${schedule[2].title}\n${schedule[2].date}`
          }
        },
      ],
      "quickReplies": [
        {
          "action": "block",
          "label": "이전",
          "messageText": `이전`,
          "blockId": "5c6ffa1105aaa75509ea8c3d",
        },
        {
          "action": "block",
          "label": "🏠",
          "messageText": `🏠`,
          "blockId": "5c66b0f65f38dd01ebc06a44",
        },
      ],
    }
  };
}

function sendWorkParse (noticeArray) {
  return {
    "version": "2.0",
    "template": {
      "outputs": [
        {
          "listCard": {
            "header": {
              "title": "취업소식",
              "imageUrl": `${process.env.NOTICE_IMAGE}`,
            },
            "items": [
              {
                "title": `${noticeArray[0].title}`,
                "description": `${noticeArray[0].date}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
                "link": {
                  "web": `${noticeArray[0].url}`
                }
              },
              {
                "title": `${noticeArray[1].title}`,
                "description": `${noticeArray[1].date}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
                "link": {
                  "web": `${noticeArray[1].url}`
                }
              },
              {
                "title": `${noticeArray[2].title}`,
                "description": `${noticeArray[2].date}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
                "link": {
                  "web": `${noticeArray[2].url}`
                }
              },
              {
                "title": `${noticeArray[3].title}`,
                "description": `${noticeArray[3].date}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
                "link": {
                  "web": `${noticeArray[3].url}`
                }
              },
              {
                "title": `${noticeArray[4].title}`,
                "description": `${noticeArray[4].date}`,
                "imageUrl": `${process.env.NOTICE_ICON_IMAGE}`,
                "link": {
                  "web": `${noticeArray[4].url}`
                }
              }
            ],
            "buttons": [
              {
                "label": "취업소식 더보기",
                "action": "webLink",
                "webLinkUrl": "http://m.gachon.ac.kr/gachon/notice.jsp?boardType_seq=773"
              }
            ]
          }
        }
      ],
      "quickReplies": [
        {
          "action": "block",
          "label": "이전",
          "messageText": `학사`,
          "blockId": "5c6acb2f384c5541a0ee5bc1",
        },
        {
          "action": "block",
          "label": "🏠",
          "messageText": `🏠`,
          "blockId": "5c6aceb7384c5541a0ee5bcc",
        },
      ],
    }
  };
}

module.exports = {
  sendFoodParser: sendFoodParser,
  sendLibraryRestSeat: sendLibraryRestSeat,
  sendNoticeParse: sendNoticeParse,
  sendScholarParse: sendScholarParse,
  sendGetWeather: sendGetWeather,
  sendGetAir: sendGetAir,
  sendLibraryInit: sendLibraryInit,
  sendElecLibraryInit: sendElecLibraryInit,
  sendElecLibrary1F: sendElecLibrary1F,
  sendElecLibrary2F: sendElecLibrary2F,
  sendMajorNoticeParse: sendMajorNoticeParse,
  sendMajorParse: sendMajorParse,
  sendMajor: sendMajor,
  sendCollege: sendCollege,
  sendEngiMajor: sendEngiMajor,
  sendEngiMajorSecond: sendEngiMajorSecond,
  sendScheduleByMonth: sendScheduleByMonth,
  sendScheduleByMonthInit: sendScheduleByMonthInit,
  sendScheduleByMonthInit2: sendScheduleByMonthInit2,
  sendSearchSchedule: sendSearchSchedule,
  sendWorkParse: sendWorkParse,
}
