import { S3_URL } from '../constants/awss3';

export default {
  container: {
    width: '1140px',
    padding: '0 15px 0 15px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  editorMenu: {
    height: '80px',
    width: '100%',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  menuSecArchs: {
    height: '100%',
    width: '100%',
    border: '1px solid #333',
  },
  menuTitle: {
    height: '25px',
    borderBottom: 'solid 1px #001323',
    boxSizing: 'border-box',
    color: '#fff',
    background:
      'linear-gradient(87deg, rgba(198,198,198,1) 0%, rgba(51,51,51,1) 40%, rgba(49,49,49,1) 50%, rgba(51,51,51,1) 60%, rgba(198,198,198,1) 100%)',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '22px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '100%',
    margin: 0,
    padding: 0,
  },
  menuDesc: {
    // ! ARCHETYPES
    height: '70%',
    position: 'relative',

    '& ul': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      listStyle: 'none',
      height: '94%',
      marginBottom: '0',
      padding: 0,
      margin: '2px 0 0 0',

      '& li': {
        margin: '0 6px',
        height: '40px',
        cursor: 'pointer',

        '&::before': {
          content: '""',
          position: 'absolute',
          display: 'inline-block',
          width: '40px',
          height: '40px',
          border: '1px solid #333',
          background: '#ffe65f0f',
        },

        '&::after': {
          content: '""',
          position: 'relative',
          display: 'inline-block',
          background: `url(${S3_URL}/etc/editor-icons.png) 0 0 no-repeat`,
          width: '40px',
          height: '40px',
        },

        '&:hover': {},
      },

      '& $warBG': {
        '&::after': {
          backgroundPosition: '-6px -1px',
        },
      },
      '& $eleBG': {
        '&::after': {
          backgroundPosition: '-48px -1px',
        },
      },
      '& $mysBG': {
        '&::after': {
          backgroundPosition: '-93px -1px',
        },
      },
      '& $assBG': {
        '&::after': {
          backgroundPosition: '-138px -1px',
        },
      },
      '& $gunBG': {
        '&::after': {
          backgroundPosition: '-180px -1px',
        },
      },
      '& $archChecked': {
        '&::after': {
          backgroundPositionY: '-44px !important',
        },
      },
    },
  },

  editorBody: {
    position: 'relative',
    width: '100%',
    height: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background:
      'linear-gradient(180deg, rgba(51,51,51,1) 0%, rgba(236,236,236,1) 50%, rgba(252,252,252,1) 100%);',
    marginTop: '1px',

    '& $bodyTab': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '100%',
      width: '50px',
      padding: '30px 0',

      '& i': {
        margin: '10px 0',
        width: '45px',
        height: '45px',
        background: '#fff',

        paddingTop: '15px',
        textAlign: 'center',
      },

      '& $tabSecSkills, $tabSecRunestones, $tabSecSephirots': {
        cursor: 'pointer',
        width: '48px',
        height: '45px',
        margin: '4px 0',

        '&::before': {
          content: '""',
          position: 'absolute',
          display: 'inline-block',
          width: '50px',
          height: '45px',
        },

        '&::after': {
          content: '""',
          position: 'relative',
          display: 'inline-block',
          background: `url(${S3_URL}/etc/editor-icons.png) -567px 1px no-repeat`,
          width: '40px',
          height: '40px',
          top: 0,
          left: '5px',
        },
      },
      '& $tabSecRunestones': {
        '&::after': {
          background: `url(${S3_URL}/etc/editor-icons.png) -567px -47px no-repeat !important`,
        },
      },
      '& $tabSecSephirots': {
        '&::after': {
          background: `url(${S3_URL}/etc/editor-icons.png) -567px -95px no-repeat !important`,
        },
      },

      '& $tabChecked': {
        '&::before': {
          background: `url(${S3_URL}/etc/tab-icon-bg.png) center center no-repeat !important`,
        },
      },
    },

    '& $bodyContent': {
      position: 'relative',
      height: '100%',
      width: '100%',
      padding: 0,
      margin: 0,
      border: '1px solid #333',
      borderRight: 'none',
      background: '#fcfcfc',

      // ! ARTS
      '& $artsDesc': {
        textAlign: 'center',
        margin: 0,
        width: '100%',
        height: '6%',
      },
      '& $artsWrapper': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '81%',
        margin: '9px 0',
      },

      // ! SKILLS
      '& $skillsWrapper': {
        width: '100%',
        height: '16%',

        '& $skillsUl': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: '0 !important',

          '& $skillLi': {
            display: 'flex',
            position: 'relative',
            flexDirection: 'column',
            width: '64px',
            margin: '0 4px',
            cursor: 'pointer',
            height: '80px',

            '&:hover i': {
              color: '#01f429',
            },

            '& i': {
              height: '15px',
              width: '100%',
              background: '#333',
              color: '#fff',
            },

            '& $skill': {
              display: 'block',
              border: '2px solid #000',
              width: '100%',
              height: '100%',

              '&:hover': {
                border: '2px solid rgb(38, 38, 38)',
                filter: 'brightness(1.3)',
              },
            },

            '& $skillSpanIconTxt': {
              background: 'none',
              color: '#fff !important',
            },
          },

          '& $skillIconSpan': {
            position: 'absolute',
            bottom: '-10px',
            textAlign: 'center',
            background: '#000',
            color: '#fff',
            padding: '3px',
            borderRadius: '50%',
            fontSize: '10px',
            fontWeight: '600',
            left: '21px',
            height: '22px',
            width: '22px',

            '&:hover': {
              background: 'rgb(191, 0, 0)',
            },
          },
        },
      },

      // ! RUNETRAITS
      '& $runetraitsWrapper': {
        margin: '12px 20px',
        background:
          'rgba(0, 0, 0, 0) linear-gradient(to right, red, purple) repeat scroll 0% 0%',
        display: 'flex',
        height: '96%',
        padding: '2px',

        '& $runetraitsLeftCol': {
          position: 'relative',
          width: '735px',
          background: 'rgba(24, 30, 40, 0.9) none repeat scroll 0% 0%',

          '& $runetraitsUl': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            height: '55px',
            listStyle: 'none',
            marginBottom: '0',
            marginTop: '10px',
            padding: 0,

            '& $runetraitsLi': {
              position: 'relative',
              margin: '0 20px',
              height: '45px',
              cursor: 'pointer',
              filter: 'grayscale(50%)',
              transition: 'filter .3s ease',

              '&::before': {
                content: '""',
                position: 'absolute',
                display: 'inline-block',
                width: '45px',
                height: '45px',
                boxShadow: '0 0 10px 2px',
                borderRadius: '6px',
                transform: 'rotate(45deg)',
                transition: 'color 0.5s ease',
              },

              '& span': {
                fontSize: '12px',
                fontWeight: 'bold',
                position: 'absolute',
                top: '42px',
              },

              '& $runetraitsSpanAmount': {
                top: '56px',
                color: '#fff',
                textAlign: 'center',
              },

              '&::after': {
                content: '""',
                position: 'relative',
                display: 'inline-block',
                background: `url(${S3_URL}/etc/editor-icons.png) 0 0 no-repeat`,
                width: '45px',
                height: '45px',
              },

              '&:hover': {
                filter: 'grayscale(0)',
              },
            },

            '& $equip': {
              '&:hover': {
                '&::before': {
                  color: props => props.liBorderColors.equip,
                },
              },

              '& span': {
                color: 'grey',
                marginLeft: '7px',
              },

              '&::after': {
                backgroundPosition: '-614px -44px !important',
              },
            },

            '& $onslaught': {
              '&:hover': {
                '&::before': {
                  color: props => props.liBorderColors.onslaught,
                },
              },

              '& span': {
                color: '#ff2626',
                marginLeft: '-5px',
              },

              '& $runetraitsSpanAmount': {
                width: '54px',
              },

              '&::after': {
                backgroundPosition: '-665px -44px !important',
              },
            },
            '& $control': {
              '&:hover': {
                '&::before': {
                  color: props => props.liBorderColors.control,
                },
              },

              '& span': {
                color: 'orange',
              },

              '& $runetraitsSpanAmount': {
                width: '40px',
              },

              '&::after': {
                backgroundPosition: '-715px -44px !important',
              },
            },
            '& $destiny': {
              '&:hover': {
                '&::before': {
                  color: props => props.liBorderColors.destiny,
                },
              },

              '& span': {
                color: 'yellow',
              },

              '& $runetraitsSpanAmount': {
                width: '40px',
              },

              '&::after': {
                backgroundPosition: '-765px -44px !important',
              },
            },
            '& $support': {
              '&:hover': {
                '&::before': {
                  color: props => props.liBorderColors.support,
                },
              },

              '& span': {
                color: '#2fce2f',
              },

              '& $runetraitsSpanAmount': {
                width: '43px',
              },

              '&::after': {
                backgroundPosition: '-815px -44px !important',
              },
            },
            '& $defense': {
              '&:hover': {
                '&::before': {
                  color: props => props.liBorderColors.defense,
                },
              },

              '& span': {
                color: '#3288f7',
              },

              '& $runetraitsSpanAmount': {
                width: '45px',
              },

              '&::after': {
                backgroundPosition: '-866px -44px !important',
              },
            },
            '& $awakening': {
              '&:hover': {
                '&::before': {
                  color: props => props.liBorderColors.awakening,
                },
              },
              '& span': {
                color: '#b648d5',
                marginLeft: '-7px',
              },

              '& $runetraitsSpanAmount': {
                width: '60px',
              },

              '&::after': {
                backgroundPosition: '-916px -44px !important',
              },
            },

            '& $equipChecked': {
              filter: 'grayscale(0) !important',
              color: props => props.liBorderColors.equip,

              '& span': {
                color: '#fafafa !important',
              },
            },
            '& $onslaughtChecked': {
              filter: 'grayscale(0) !important',
              color: props => props.liBorderColors.onslaught,
            },
            '& $controlChecked': {
              filter: 'grayscale(0) !important',
              color: props => props.liBorderColors.control,
            },
            '& $destinyChecked': {
              filter: 'grayscale(0) !important',
              color: props => props.liBorderColors.destiny,
            },
            '& $supportChecked': {
              filter: 'grayscale(0) !important',
              color: props => props.liBorderColors.support,
            },
            '& $defenseChecked': {
              filter: 'grayscale(0) !important',
              color: props => props.liBorderColors.defense,
            },
            '& $awakeningChecked': {
              filter: 'grayscale(0) !important',
              color: props => props.liBorderColors.awakening,
            },
          },

          '& $runetraitsSecBody': {
            position: 'absolute',
            height: '490px',
            width: '100%',
            padding: '10px 30px',
            marginTop: '15px',

            '& $runetraitsEquips': {
              display: 'flex',
              alignItems: 'center',
              margin: '7px 0',

              '& $runetraitsEquipBtn': {
                color: '#fff',
                cursor: 'pointer',

                '&:hover': {
                  color: 'yellow',
                },
              },

              '& $runetraitsEquipType': {
                position: 'relative',
                width: '40px',
                height: '40px',
                display: 'inline-block',
                transition: 'all 0.5s ease',
                marginLeft: '10px',

                '& span': {
                  color: '#edeff0',
                  position: 'absolute',
                  fontSize: '16px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: '1',
                },

                '&::before': {
                  content: '""',
                  position: 'absolute',
                  width: '40px',
                  height: '40px',
                  display: 'inline-block',
                  backgroundColor: '#00000070',
                  borderRadius: '2px',
                  zIndex: 0,
                  boxShadow: '0px 0px 4px 2px rgba(255, 255, 255, 0.7)',
                  transition: 'all 0.5s ease',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  display: 'inline-block',
                  background: `url(${S3_URL}/etc/editor-icons.png) 0 0 no-repeat`,
                  width: '40px',
                  height: '40px',
                },
              },

              '& $runetraitsSlots': {
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                padding: '8px 0',
                margin: '0 0 0 17px',
                transition: 'all 0.3s ease',

                '& $runetraitSlot': {
                  height: '40px',
                  width: '40px',
                  margin: '0 7px',
                  listStyle: 'none',
                  boxShadow: '0px 0px 3px 1px rgba(255, 255, 255, 0.7)',
                  cursor: 'pointer',

                  '&:hover': {
                    boxShadow: 'rgb(255, 255, 0) 0px 0px 3px 1px',
                  },
                },

                '& $runetraitSlotChecked': {
                  background: 'rgba(0, 0, 0, 0.35)',

                  '& img': {
                    filter: 'brightness(1.25)',
                  },
                },
              },
            },

            '& $helmet': {
              '&::after': {
                backgroundPosition: '-255px -44px !important',
              },
            },
            '& $chest': {
              '&::after': {
                backgroundPosition: '-297px -44px !important',
              },
            },
            '& $pants': {
              '&::after': {
                backgroundPosition: '-333px -44px !important',
              },
            },
            '& $boots': {
              '&::after': {
                backgroundPosition: '-368px -44px !important',
              },
            },
            '& $gloves': {
              '&::after': {
                backgroundPosition: '-408px -44px !important',
              },
            },
            '& $greaves': {
              '&::after': {
                backgroundPosition: '-445px -44px !important',
              },
            },
            '& $weapon': {
              '&::after': {
                backgroundPosition: '-483px -44px !important',
              },
            },

            '& $runetraitsTiers': {
              display: 'flex',
              alignItems: 'center',
              margin: '2px 0',
              padding: '12px 0',

              '& $runetraitsIconTier': {
                position: 'relative',
                width: '50px',
                height: '50px',
                display: 'inline-block',
                transition: 'all 0.5s ease',
                marginLeft: '10px',

                '& span': {
                  color: '#edeff0',
                  position: 'absolute',
                  fontSize: '16px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: '1',
                },

                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '7px',
                  left: '7px',
                  width: '36px',
                  height: '36px',
                  display: 'inline-block',
                  backgroundColor: '#00000070',
                  borderRadius: '2px',
                  transform: 'rotate(45deg)',
                  zIndex: 0,
                  transition: 'all 0.5s ease',
                },
              },

              '& $runetraitsTalent': {
                position: 'relative',
                display: 'inline-block',
                marginLeft: '50px',
                borderRadius: '50%',
                padding: '3px',
                backgroundColor: '#030405',
                transition: 'all 0.3s ease',
                cursor: 'pointer',

                '&::before': {
                  content: '""',
                  position: 'absolute',
                  height: '1px',
                  top: '50%',
                  transform: 'translate(0, -50%)',
                  width: '50px',
                  left: '-51px',
                  cursor: 'default',
                },

                '& $runetraitsTalentImg': {
                  clipPath: 'circle(38% at 50% 50%)',
                  width: '40px',
                  borderRadius: '50%',
                  filter: 'brightness(0.25)',
                  transition: 'all 0.3s ease',
                },

                '&:hover': {
                  background: '#0d1112',
                },
                '&:hover $runetraitsTalentImg': {
                  filter: 'brightness(1)',
                },
              },
              '& $runetraitsTalentChecked': {
                background: '#0d1215 !important',
                boxShadow:
                  '0px 0px 5px 2px rgba(255, 255, 255, 0.7) !important',

                '& $runetraitsTalentImg': {
                  filter: 'brightness(1) !important',
                },
              },

              '& $runetraitsSpinner': {
                position: 'absolute',
                top: '-2px',
                left: '-2px',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
              },

              '& $borderLeft': {
                borderTop: '2px solid #fff',
                borderBottomWidth: '2px',
                animation: '$borderRotateReverse 1200ms ease-in-out infinite',
              },
              '& $borderMiddle': {
                borderTop: '2px solid #fff',
                borderBottom: '2px solid #fff',
                animation: '$borderRotate 1600ms ease-in-out infinite',
              },
              '& $borderRight': {
                borderTop: '2px solid #fff',
                borderBottomWidth: '2px',
                animation: '$borderRotateReverse 800ms ease-in-out infinite',
              },

              '& $runetraitsOnslaughtChecked': {
                borderTop: '2px solid #f00',
                borderBottom: '2px solid #c82929',
              },
              '& $runetraitsControlChecked': {
                borderTop: '2px solid #ff4800',
                borderBottom: '2px solid #db683a',
              },
              '& $runetraitsDestinyChecked': {
                borderTop: '2px solid #ffcb00',
                borderBottom: '2px solid #d2ad1d',
              },
              '& $runetraitsSupportChecked': {
                borderTop: '2px solid #48cc18',
                borderBottom: '2px solid #449d23',
              },
              '& $runetraitsDefenseChecked': {
                borderTop: '2px solid #1049d0',
                borderBottom: '2px solid #193d93',
              },
              '& $runetraitsAwakeningChecked': {
                borderTop: '2px solid #9515ff',
                borderBottom: '2px solid #7314c4',
              },
            },

            '& $RunetraitOnslaught': {
              background:
                'linear-gradient(87deg, rgba(255, 85, 85, 0.82) 0%, rgba(255,251,234,0) 75%)',

              '& $runetraitsIconTier': {
                '&::after': {
                  boxShadow: '0px 0px 6px 4px rgba(125, 18, 18, 0.7)',
                },
              },

              '& $runetraitsTalent': {
                border: '1px solid #ff4646',
                '&::before': {
                  backgroundColor: '#ff4646',
                },
              },
            },

            '& $RunetraitControl': {
              background:
                'linear-gradient(87deg, rgba(255, 136, 64, 0.82) 0%, rgba(255,251,234,0) 75%)',

              '& $runetraitsIconTier': {
                '&::after': {
                  boxShadow: '0px 0px 6px 4px rgba(125, 48, 18, 0.7)',
                },
              },

              '& $runetraitsTalent': {
                border: '1px solid #ff8b46',
                '&::before': {
                  backgroundColor: '#ff8b46',
                },
              },
            },

            '& $RunetraitDestiny': {
              background:
                'linear-gradient(87deg, rgba(255, 225, 64, 0.82) 0%, rgba(255,251,234,0) 75%)',

              '& $runetraitsIconTier': {
                '&::after': {
                  boxShadow: '0px 0px 6px 4px rgba(125, 103, 18, 0.7)',
                },
              },

              '& $runetraitsTalent': {
                border: '1px solid #fff346',
                '&::before': {
                  backgroundColor: '#fff346',
                },
              },
            },

            '& $RunetraitSupport': {
              background:
                'linear-gradient(87deg, rgba(142, 255, 64, 0.82) 0%, rgba(255,251,234,0) 75%)',

              '& $runetraitsIconTier': {
                '&::after': {
                  boxShadow: '0px 0px 6px 4px rgba(61, 125, 18, 0.7)',
                },
              },

              '& $runetraitsTalent': {
                border: '1px solid #88ff46',
                '&::before': {
                  backgroundColor: '#88ff46',
                },
              },
            },

            '& $RunetraitDefense': {
              background:
                'linear-gradient(87deg, rgba(64, 192, 255, 0.82) 0%, rgba(255,251,234,0) 75%)',

              '& $runetraitsIconTier': {
                '&::after': {
                  boxShadow: '0px 0px 6px 4px rgba(18, 105, 125, 0.7)',
                },
              },

              '& $runetraitsTalent': {
                border: '1px solid #46c2ff',
                '&::before': {
                  backgroundColor: '#46c2ff',
                },
              },
            },

            '& $RunetraitAwakening': {
              background:
                'linear-gradient(87deg, rgba(160, 64, 255, 0.82) 0%, rgba(255,251,234,0) 75%)',

              '& $runetraitsIconTier': {
                '&::after': {
                  boxShadow: '0px 0px 6px 4px rgba(97, 18, 125, 0.7)',
                },
              },

              '& $runetraitsTalent': {
                border: '1px solid #a346ff',
                '&::before': {
                  backgroundColor: '#a346ff',
                },
              },
            },
          },
        },

        '& $runetraitsRightCol': {
          borderLeft: '1px solid #a2a2a2',
          width: '282px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'auto',
          background: 'rgba(26, 30, 38, 0.93) none repeat scroll 0% 0%',

          '& $runetraitsRCItem': {
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            margin: '1px 4px',
            background: 'rgb(42, 34, 62)',
            border: '1px solid #424242',

            '& $runetraitsRCTxtWrapper': {
              marginLeft: '3px',
              color: '#fcfcfc',
            },

            '& $runetraitsRCImg': {
              height: '30px',
              position: 'absolute',
              top: 0,
              right: 0,
            },

            '& $runetraitsRCName': {
              fontSize: '17px',
            },

            '& $runetraitsRCDesc': {
              fontSize: '11px',
              marginBottom: '3px',
            },
          },
        },
      },

      // ! SEPHIROTS
      '& $sephirotsWrapper': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '96%',
        width: '96%',
        margin: '12px 20px',
        border: '2px solid #8a29ff',
        background: 'rgb(21, 27, 30) none repeat scroll 0% 0%',

        '& $sephirotGraphTree': {
          position: 'relative',
          padding: 0,
          margin: '12px auto',
          background: `#1b2223 url(${S3_URL}/sephirots/sephbg.png) center center no-repeat`,
          height: '100%',
          width: '62%',
          border: '1px solid #1b2223',

          '& $sephirotNode': {
            width: '24px',
            height: '24px',
            position: 'absolute',
            borderRadius: '50%',
            listStyle: 'none',
            cursor: 'pointer',
          },

          '& $checkedSephNode': {
            animation: '$sephcheckedbg 2000ms linear infinite',
            border: '2px solid rgb(145, 249, 107)',
          },
        },

        '& $sephirotsPoints': {
          position: 'absolute',
          top: '20px',
          left: '34px',
          color: '#fff',
          fontWeight: '600',
          fontSize: '16px',
        },

        '& $clearBtn': {
          position: 'absolute',
          top: '50px',
          left: '34px',
          display: 'inline-block',
          background: 'none',
          color: '#fff',
          outline: '0',
          border: '2px solid rgb(255, 255, 255)',
          fontWeight: 'bold',
          margin: '4px auto',
        },
      },
    },
  },

  qlink: {
    margin: '10px auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& textarea': {
      fontSize: '10px',
      resize: 'none',
      overflow: 'auto',
      color: 'transparent',
      textShadow: '0 0 0 #2196f3',
      width: '90%',
      height: '60px',
      border: '1px solid #a2a2a2',
    },

    '& $copyToClipboardBtn': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.6rem',
      height: '60px',
      width: '4%',
      background: '#333',
      color: '#fff',
      border: '1px solid rgb(162, 162, 162)',
      borderLeft: 'none',
      cursor: 'pointer',
      transition: 'color 0.3s ease',

      '&:hover': {
        color: 'rgb(255, 205, 9)',
      },
    },

    '& textarea, & div': {
      margin: '2px 0',
    },
  },
  copyToClipboardBtn: {},

  bodyTab: {},
  bodyContent: {},
  artsDesc: {},
  artsWrapper: {},
  skillsWrapper: {},
  skillsUl: {},
  skillLi: {},
  skillIconSpan: {},
  warBG: {},
  eleBG: {},
  mysBG: {},
  assBG: {},
  gunBG: {},
  archChecked: {},
  arrow: {},
  tabSecSkills: {},
  tabSecRunestones: {},
  tabSecSephirots: {},
  tabChecked: {},
  skill: {},
  arrowIconDown: {
    '&::before': {
      position: 'relative',
      top: '-6px',
      color: '#01f429',
    },
  },
  skillSpanIconTxt: {},

  // *****************
  runetraitsWrapper: {},
  runetraitsLeftCol: {},
  runetraitsUl: {},
  runetraitsLi: {},
  equipChecked: {},
  onslaughtChecked: {},
  controlChecked: {},
  destinyChecked: {},
  supportChecked: {},
  defenseChecked: {},
  awakeningChecked: {},
  runetraitsSpanAmount: {},
  equip: {},
  onslaught: {},
  control: {},
  destiny: {},
  support: {},
  defense: {},
  awakening: {},
  runetraitsSecBody: {},
  runetraitsEquips: {},
  helmet: {},
  chest: {},
  pants: {},
  boots: {},
  gloves: {},
  greaves: {},
  weapon: {},
  runetraitsEquipBtn: {},
  runetraitsEquipType: {},
  runetraitsSlots: {},
  runetraitSlot: {},
  runetraitSlotChecked: {},
  runetraitsTiers: {},
  RunetraitOnslaught: {},
  RunetraitControl: {},
  RunetraitDestiny: {},
  RunetraitSupport: {},
  RunetraitDefense: {},
  RunetraitAwakening: {},
  runetraitsIconTier: {},
  runetraitsTalent: {},
  runetraitsTalentChecked: {},
  runetraitsOnslaughtChecked: {},
  runetraitsControlChecked: {},
  runetraitsDestinyChecked: {},
  runetraitsSupportChecked: {},
  runetraitsDefenseChecked: {},
  runetraitsAwakeningChecked: {},
  runetraitsSpinner: {},
  borderLeft: {},
  borderMiddle: {},
  borderRight: {},
  runetraitsTalentImg: {},
  runetraitsRightCol: {},
  runetraitsRCItem: {},
  runetraitsRCTxtWrapper: {},
  runetraitsRCImg: {},
  runetraitsRCDesc: {},
  runetraitsRCName: {},

  // *****************
  sephirotsWrapper: {},
  sephirotGraphTree: {},
  sephirotNode: {},
  checkedSephNode: {},
  sephirotsPoints: {},
  clearBtn: {},

  '@keyframes borderRotate': {
    '0%': {
      '-webkit-transform': 'rotate(0deg)',
      transform: 'rotate(0deg)',
    },

    '12.5%': {
      '-webkit-transform': 'rotate(45deg)',
      transform: 'rotate(45deg)',
    },

    '25%': {
      '-webkit-transform': 'rotate(90deg)',
      transform: 'rotate(90deg)',
    },

    '37.5%': {
      '-webkit-transform': 'rotate(135deg)',
      transform: 'rotate(135deg)',
    },

    '50%': {
      '-webkit-transform': 'rotate(180deg)',
      transform: 'rotate(180deg)',
    },

    '62.5%': {
      '-webkit-transform': 'rotate(225deg)',
      transform: 'rotate(225deg)',
    },

    '75%': {
      '-webkit-transform': 'rotate(270deg)',
      transform: 'rotate(270deg)',
    },

    '87.5%': {
      '-webkit-transform': 'rotate(315deg)',
      transform: 'rotate(315deg)',
    },

    '100%': {
      '-webkit-transform': 'rotate(360deg)',
      transform: 'rotate(360deg)',
    },
  },

  '@keyframes borderRotateReverse': {
    '0%': {
      '-webkit-transform': 'rotate(0deg)',
      transform: 'rotate(0deg)',
    },

    '12.5%': {
      '-webkit-transform': 'rotate(45deg)',
      transform: 'rotate(-45deg)',
    },

    '25%': {
      '-webkit-transform': 'rotate(90deg)',
      transform: 'rotate(-90deg)',
    },

    '37.5%': {
      '-webkit-transform': 'rotate(135deg)',
      transform: 'rotate(-135deg)',
    },

    '50%': {
      '-webkit-transform': 'rotate(180deg)',
      transform: 'rotate(-180deg)',
    },

    '62.5%': {
      '-webkit-transform': 'rotate(225deg)',
      transform: 'rotate(-225deg)',
    },

    '75%': {
      '-webkit-transform': 'rotate(270deg)',
      transform: 'rotate(-270deg)',
    },

    '87.5%': {
      '-webkit-transform': 'rotate(315deg)',
      transform: 'rotate(-315deg)',
    },

    '100%': {
      '-webkit-transform': 'rotate(360deg)',
      transform: 'rotate(-360deg)',
    },
  },

  '@keyframes sephcheckedbg': {
    '0%': { backgroundColor: '#fff0' },
    '50%': { backgroundColor: '#ffff834a' },
    '100%': { backgroundColor: '#fff0' },
  },

  'composite-shells': {
    left: props => props.sephirotsStaticPos['composite-shells'].x,
    bottom: props => props.sephirotsStaticPos['composite-shells'].y,
  },
  'branch-of-the-chase': {
    left: props => props.sephirotsStaticPos['branch-of-the-chase'].x,
    bottom: props => props.sephirotsStaticPos['branch-of-the-chase'].y,
  },
  'thrill-of-the-hunt': {
    left: props => props.sephirotsStaticPos['thrill-of-the-hunt'].x,
    bottom: props => props.sephirotsStaticPos['thrill-of-the-hunt'].y,
  },
  'battle-reload': {
    left: props => props.sephirotsStaticPos['battle-reload'].x,
    bottom: props => props.sephirotsStaticPos['battle-reload'].y,
  },
  'seize-the-moment': {
    left: props => props.sephirotsStaticPos['seize-the-moment'].x,
    bottom: props => props.sephirotsStaticPos['seize-the-moment'].y,
  },
  'shell-of-death': {
    left: props => props.sephirotsStaticPos['shell-of-death'].x,
    bottom: props => props.sephirotsStaticPos['shell-of-death'].y,
  },
  'shell-arsenal': {
    left: props => props.sephirotsStaticPos['shell-arsenal'].x,
    bottom: props => props.sephirotsStaticPos['shell-arsenal'].y,
  },
  'wave-reverse': {
    left: props => props.sephirotsStaticPos['wave-reverse'].x,
    bottom: props => props.sephirotsStaticPos['wave-reverse'].y,
  },
  scoping: {
    left: props => props.sephirotsStaticPos['scoping'].x,
    bottom: props => props.sephirotsStaticPos['scoping'].y,
  },
  'heat-of-attack': {
    left: props => props.sephirotsStaticPos['heat-of-attack'].x,
    bottom: props => props.sephirotsStaticPos['heat-of-attack'].y,
  },
  'sniper-shots': {
    left: props => props.sephirotsStaticPos['sniper-shots'].x,
    bottom: props => props.sephirotsStaticPos['sniper-shots'].y,
  },
  'fury-of-the-hunt': {
    left: props => props.sephirotsStaticPos['fury-of-the-hunt'].x,
    bottom: props => props.sephirotsStaticPos['fury-of-the-hunt'].y,
  },
  'firing-line': {
    left: props => props.sephirotsStaticPos['firing-line'].x,
    bottom: props => props.sephirotsStaticPos['firing-line'].y,
  },
  'fire-from-above': {
    left: props => props.sephirotsStaticPos['fire-from-above'].x,
    bottom: props => props.sephirotsStaticPos['fire-from-above'].y,
  },
  'weakness-analysis': {
    left: props => props.sephirotsStaticPos['weakness-analysis'].x,
    bottom: props => props.sephirotsStaticPos['weakness-analysis'].y,
  },
  'serrated-tips': {
    left: props => props.sephirotsStaticPos['serrated-tips'].x,
    bottom: props => props.sephirotsStaticPos['serrated-tips'].y,
  },
  'insurance-shots': {
    left: props => props.sephirotsStaticPos['insurance-shots'].x,
    bottom: props => props.sephirotsStaticPos['insurance-shots'].y,
  },
  'hunting-experience': {
    left: props => props.sephirotsStaticPos['hunting-experience'].x,
    bottom: props => props.sephirotsStaticPos['hunting-experience'].y,
  },
  'attack-preparation': {
    left: props => props.sephirotsStaticPos['attack-preparation'].x,
    bottom: props => props.sephirotsStaticPos['attack-preparation'].y,
  },
  ambidexterity: {
    left: props => props.sephirotsStaticPos['ambidexterity'].x,
    bottom: props => props.sephirotsStaticPos['ambidexterity'].y,
  },

  'branch-of-the-mind': {
    left: props => props.sephirotsStaticPos['branch-of-the-mind'].x,
    bottom: props => props.sephirotsStaticPos['branch-of-the-mind'].y,
  },
  'mental-focus': {
    left: props => props.sephirotsStaticPos['mental-focus'].x,
    bottom: props => props.sephirotsStaticPos['mental-focus'].y,
  },
  'inquisitive-mind': {
    left: props => props.sephirotsStaticPos['inquisitive-mind'].x,
    bottom: props => props.sephirotsStaticPos['inquisitive-mind'].y,
  },
  'the-veil-of-consciousness': {
    left: props => props.sephirotsStaticPos['the-veil-of-consciousness'].x,
    bottom: props => props.sephirotsStaticPos['the-veil-of-consciousness'].y,
  },
  'speed-of-thought': {
    left: props => props.sephirotsStaticPos['speed-of-thought'].x,
    bottom: props => props.sephirotsStaticPos['speed-of-thought'].y,
  },
  'mental-training': {
    left: props => props.sephirotsStaticPos['mental-training'].x,
    bottom: props => props.sephirotsStaticPos['mental-training'].y,
  },
  'source-of-consciousness': {
    left: props => props.sephirotsStaticPos['source-of-consciousness'].x,
    bottom: props => props.sephirotsStaticPos['source-of-consciousness'].y,
  },
  'comprehension-of-pain': {
    left: props => props.sephirotsStaticPos['comprehension-of-pain'].x,
    bottom: props => props.sephirotsStaticPos['comprehension-of-pain'].y,
  },
  'overwhelming-powers': {
    left: props => props.sephirotsStaticPos['overwhelming-powers'].x,
    bottom: props => props.sephirotsStaticPos['overwhelming-powers'].y,
  },
  'patience-of-mind': {
    left: props => props.sephirotsStaticPos['patience-of-mind'].x,
    bottom: props => props.sephirotsStaticPos['patience-of-mind'].y,
  },
  'depth-of-mind': {
    left: props => props.sephirotsStaticPos['depth-of-mind'].x,
    bottom: props => props.sephirotsStaticPos['depth-of-mind'].y,
  },
  'mental-barrier': {
    left: props => props.sephirotsStaticPos['mental-barrier'].x,
    bottom: props => props.sephirotsStaticPos['mental-barrier'].y,
  },
  'limit-of-consciousness': {
    left: props => props.sephirotsStaticPos['limit-of-consciousness'].x,
    bottom: props => props.sephirotsStaticPos['limit-of-consciousness'].y,
  },
  'battle-meditation': {
    left: props => props.sephirotsStaticPos['battle-meditation'].x,
    bottom: props => props.sephirotsStaticPos['battle-meditation'].y,
  },
  'mental-shield': {
    left: props => props.sephirotsStaticPos['mental-shield'].x,
    bottom: props => props.sephirotsStaticPos['mental-shield'].y,
  },
  'mental-pressure': {
    left: props => props.sephirotsStaticPos['mental-pressure'].x,
    bottom: props => props.sephirotsStaticPos['mental-pressure'].y,
  },
  'second-thoughts': {
    left: props => props.sephirotsStaticPos['second-thoughts'].x,
    bottom: props => props.sephirotsStaticPos['second-thoughts'].y,
  },
  'liberation-of-consciousness': {
    left: props => props.sephirotsStaticPos['liberation-of-consciousness'].x,
    bottom: props => props.sephirotsStaticPos['liberation-of-consciousness'].y,
  },
  enlightenment: {
    left: props => props.sephirotsStaticPos['enlightenment'].x,
    bottom: props => props.sephirotsStaticPos['enlightenment'].y,
  },
  'conversion-of-consciousness': {
    left: props => props.sephirotsStaticPos['conversion-of-consciousness'].x,
    bottom: props => props.sephirotsStaticPos['conversion-of-consciousness'].y,
  },

  'branch-of-dexterity': {
    left: props => props.sephirotsStaticPos['branch-of-dexterity'].x,
    bottom: props => props.sephirotsStaticPos['branch-of-dexterity'].y,
  },
  'evasive-attack': {
    left: props => props.sephirotsStaticPos['evasive-attack'].x,
    bottom: props => props.sephirotsStaticPos['evasive-attack'].y,
  },
  'lightning-sprint': {
    left: props => props.sephirotsStaticPos['lightning-sprint'].x,
    bottom: props => props.sephirotsStaticPos['lightning-sprint'].y,
  },
  'battle-marathon': {
    left: props => props.sephirotsStaticPos['battle-marathon'].x,
    bottom: props => props.sephirotsStaticPos['battle-marathon'].y,
  },
  'battle-evasion': {
    left: props => props.sephirotsStaticPos['battle-evasion'].x,
    bottom: props => props.sephirotsStaticPos['battle-evasion'].y,
  },
  'escape-artist': {
    left: props => props.sephirotsStaticPos['escape-artist'].x,
    bottom: props => props.sephirotsStaticPos['escape-artist'].y,
  },
  'power-of-sprint': {
    left: props => props.sephirotsStaticPos['power-of-sprint'].x,
    bottom: props => props.sephirotsStaticPos['power-of-sprint'].y,
  },
  'liberty-of-movement': {
    left: props => props.sephirotsStaticPos['liberty-of-movement'].x,
    bottom: props => props.sephirotsStaticPos['liberty-of-movement'].y,
  },
  'boot-knives': {
    left: props => props.sephirotsStaticPos['boot-knives'].x,
    bottom: props => props.sephirotsStaticPos['boot-knives'].y,
  },
  'runners-luck': {
    left: props => props.sephirotsStaticPos['runners-luck'].x,
    bottom: props => props.sephirotsStaticPos['runners-luck'].y,
  },
  'calculated-evasion': {
    left: props => props.sephirotsStaticPos['calculated-evasion'].x,
    bottom: props => props.sephirotsStaticPos['calculated-evasion'].y,
  },
  'sly-twister': {
    left: props => props.sephirotsStaticPos['sly-twister'].x,
    bottom: props => props.sephirotsStaticPos['sly-twister'].y,
  },
  'thunder-evasion': {
    left: props => props.sephirotsStaticPos['thunder-evasion'].x,
    bottom: props => props.sephirotsStaticPos['thunder-evasion'].y,
  },
  'liberty-of-spirit': {
    left: props => props.sephirotsStaticPos['liberty-of-spirit'].x,
    bottom: props => props.sephirotsStaticPos['liberty-of-spirit'].y,
  },
  'sly-dodge': {
    left: props => props.sephirotsStaticPos['sly-dodge'].x,
    bottom: props => props.sephirotsStaticPos['sly-dodge'].y,
  },
  overconfidence: {
    left: props => props.sephirotsStaticPos['overconfidence'].x,
    bottom: props => props.sephirotsStaticPos['overconfidence'].y,
  },
  balance: {
    left: props => props.sephirotsStaticPos['balance'].x,
    bottom: props => props.sephirotsStaticPos['balance'].y,
  },
  'evasion-and-cloak': {
    left: props => props.sephirotsStaticPos['evasion-and-cloak'].x,
    bottom: props => props.sephirotsStaticPos['evasion-and-cloak'].y,
  },
  'lightning-marathon': {
    left: props => props.sephirotsStaticPos['lightning-marathon'].x,
    bottom: props => props.sephirotsStaticPos['lightning-marathon'].y,
  },
  'liberty-of-flesh': {
    left: props => props.sephirotsStaticPos['liberty-of-flesh'].x,
    bottom: props => props.sephirotsStaticPos['liberty-of-flesh'].y,
  },
  // border: '2px dotted #ffbf00',

  tempAside: {
    color: 'red',
    fontStyle: 'italic',
    margin: '0 50px',
  },
};
