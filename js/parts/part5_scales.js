/* Part 5 — IRQ and VISQ-R
   SurveyJS survey — edit questions here. Re-run nothing; this IS the source.
 */
window.IVQ = window.IVQ || {};
IVQ.parts.part5 = function (jsPsych) {
  const survey_json = {
  "showQuestionNumbers": "off",
  "showPrevButton": true,
  "showProgressBar": "off",
  "pageNextText": "Next",
  "pagePrevText": "Previous",
  "completeText": "Continue",
  "pages": [
    {
      "name": "irq",
      "elements": [
        {
          "type": "matrix",
          "name": "irq",
          "title": "How often do the following experiences occur to you?",
          "isAllRowRequired": true,
          "rowsOrder": "random",
          "columns": [
            {
              "value": 1,
              "text": "Strongly Disagree"
            },
            {
              "value": 2,
              "text": "Disagree"
            },
            {
              "value": 3,
              "text": "Neither agree nor disagree"
            },
            {
              "value": 4,
              "text": "Agree"
            },
            {
              "value": 5,
              "text": "Strongly Agree"
            }
          ],
          "rows": [
            {
              "value": "irq_01",
              "text": "I often enjoy the use of mental pictures to reminisce"
            },
            {
              "value": "irq_02",
              "text": "I can close my eyes and easily picture a scene that I have experienced"
            },
            {
              "value": "irq_03",
              "text": "My mental images are very vivid and photographic"
            },
            {
              "value": "irq_04",
              "text": "The old saying “A picture is worth a thousand words” is certainly true for me"
            },
            {
              "value": "irq_05",
              "text": "When I think about someone I know well, I instantly see their face in my mind"
            },
            {
              "value": "irq_06",
              "text": "I often use mental images or pictures to help me remember things"
            },
            {
              "value": "irq_07",
              "text": "My memories are mainly visual in nature"
            },
            /* {
              "value": "irq_08",
              "text": "When traveling to get to somewhere I tend to think more visually than verbally"
            }, */
            {
              "value": "irq_09",
              "text": "If I talk to myself in my head it is usually accompanied by visual imagery"
            },
            {
              "value": "irq_10",
              "text": "If I imagine my memories visually they are more often static than moving"
            },
            {
              "value": "irq_11",
              "text": "I think about problems in my mind in the form of a conversation with myself"
            },
            {
              "value": "irq_12",
              "text": "If I am walking somewhere by myself, I often have a silent conversation with myself"
            },
            {
              "value": "irq_13",
              "text": "If I am walking somewhere by myself, I frequently think of conversations that I’ve recently had"
            },
            {
              "value": "irq_14",
              "text": "My inner speech helps my imagination"
            },
            {
              "value": "irq_15",
              "text": "I tend to think things through verbally when I am relaxing"
            },
            {
              "value": "irq_16",
              "text": "When thinking about a social problem, I often talk it through in my head"
            },
            /* {
              "value": "irq_17",
              "text": "I like to give myself some down time to talk through thoughts in my mind"
            }, */
            {
              "value": "irq_18",
              "text": "I hear words in my \"mind’s ear\" when I think"
            },
            {
              "value": "irq_19",
              "text": "I rarely vocalize thoughts in my mind"
            },
            {
              "value": "irq_20",
              "text": "I often talk to myself internally while watching TV"
            },
            {
              "value": "irq_21",
              "text": "My memories often involve conversations I’ve had"
            },
            {
              "value": "irq_22",
              "text": "When I read, I tend to hear a voice in my \"mind’s ear\""
            },
            {
              "value": "irq_23",
              "text": "When I hear someone talking, I see words written down in my mind"
            },
            {
              "value": "irq_24",
              "text": "I see words in my \"mind’s eye\" when I think"
            },
            /* {
              "value": "irq_25",
              "text": "When I am introduced to someone for the first time, I imagine what their name would look like when written down"
            }, */
            {
              "value": "irq_26",
              "text": "A strategy I use to help me remember written material is imagining what the writing looks like"
            },
            {
              "value": "irq_27",
              "text": "I hear a running summary of everything I am doing in my head"
            },
            {
              "value": "irq_28",
              "text": "I rehearse in my mind how someone might respond to a text message before I send it"
            },
            {
              "value": "irq_29",
              "text": "I can easily imagine and mentally rotate three-dimensional geometric figures"
            },
            {
              "value": "irq_30",
              "text": "I can easily choose to imagine this sentence in my mind pronounced unnaturally slowly"
            },
            /* {
              "value": "irq_31",
              "text": "In school, I had no problems with geometry"
            }, */
            /*{
              "value": "irq_32",
              "text": "It is easy for me to imagine the sensation of licking a brick"
            }, */
            /* {
              "value": "irq_33",
              "text": "I find it difficult to imagine how a three-dimensional geometric figure would exactly look like when rotated"
            }, */
            {
              "value": "irq_34",
              "text": "I can easily imagine someone clearly talking, and then imagine the same voice with a heavy cold"
            },
            /* {
              "value": "irq_35",
              "text": "I think I have a large vocabulary in my native language compared to others"
            }, */
            {
              "value": "irq_36",
              "text": "I can easily imagine the sound of a trumpet getting louder"
            }
          ]
        }
      ]
    },
    {
      "name": "visqr",
      "elements": [
        {
          "type": "matrix",
          "name": "visqr",
          "title": "How often do the following experiences occur to you?",
          "isAllRowRequired": true,
          "rowsOrder": "random",
          "columns": [
            {
              "value": 1,
              "text": "Never"
            },
            {
              "value": 2,
              "text": "Very rarely"
            },
            {
              "value": 3,
              "text": "Rarely"
            },
            {
              "value": 4,
              "text": "Sometimes"
            },
            {
              "value": 5,
              "text": "Often"
            },
            {
              "value": 6,
              "text": "Very often"
            },
            {
              "value": 7,
              "text": "All the time"
            }
          ],
          "rows": [
            {
              "value": "visqr_01",
              "text": "I think to myself in words using brief phrases and single words rather than full sentences"
            },
            {
              "value": "visqr_02",
              "text": "When I am talking to myself about things in my mind, it is like I am going back and forward asking myself questions and then answering them"
            },
            {
              "value": "visqr_03",
              "text": "I hear the voice of another person in my head. For example, when I act in a certain way I hear my mother’s voice in my mind"
            },
            {
              "value": "visqr_04",
              "text": "I experience the voices of other people asking me questions in my head"
            },
            {
              "value": "visqr_05",
              "text": "I hear other people’s voices nagging me in my head"
            },
            {
              "value": "visqr_06",
              "text": "My thinking in words is more like a dialogue with myself, rather than my own thoughts in a monologue"
            },
            {
              "value": "visqr_07",
              "text": "I think to myself in words using full sentences"
            },
            {
              "value": "visqr_08",
              "text": "My thinking to myself in words is like shorthand notes, rather than full, proper, grammatical English"
            },
            {
              "value": "visqr_09",
              "text": "I think in inner speech about what I have done, and whether it was right or not"
            },
            {
              "value": "visqr_10",
              "text": "When I am talking to myself about things in my mind, it is like I am having a conversation with myself"
            },
            {
              "value": "visqr_11",
              "text": "I talk silently in my head telling myself to do things"
            },
            {
              "value": "visqr_12",
              "text": "I hear other people’s actual voices in my head, saying things that they have never said to me before"
            },
            {
              "value": "visqr_13",
              "text": "I talk back and forward to myself in my mind about things"
            },
            {
              "value": "visqr_14",
              "text": "My thinking in words is shortened compared to my normal out-loud speech. For example, rather than saying to myself things like ‘I need to go to the shops’, I will just say ‘shops’ to myself in my head"
            },
            {
              "value": "visqr_15",
              "text": "If I were to write down my thoughts on paper, they would read like a normal grammatical sentence"
            },
            {
              "value": "visqr_16",
              "text": "I hear other people’s actual voices in my head, saying things that they actually once said to me"
            },
            /* {
              "value": "visqr_17",
              "text": "I talk silently in my inner speech telling myself not to do things"
            }, */
            /* {
              "value": "visqr_18",
              "text": "I evaluate my behaviour using my inner speech. For example, I say to myself, ‘that was good’ or ‘that was stupid’"
            }, */
            /* {
              "value": "visqr_19",
              "text": "I talk to myself silently in an encouraging way"
            }, */
            /* {
              "value": "visqr_20",
              "text": "In my head I talk to myself a critical way"
            }, */
            {
              "value": "visqr_21",
              "text": "Certain words or sentences repeat in my head"
            },
            {
              "value": "visqr_22",
              "text": "I think to myself in the second person, saying things like “You can do this” or “You forgot to do that”"
            },
            {
              "value": "visqr_23",
              "text": "When I think in words, it feels like I am speaking and listening"
            },
            {
              "value": "visqr_24",
              "text": "When I think in words, it is like listening to a recording of my voice"
            },
            {
              "value": "visqr_25",
              "text": "My thinking in words is like a speech or a monologue, rather than a conversation"
            },
            {
              "value": "visqr_26",
              "text": "I am in control of my inner speech"
            },
            /* {
              "value": "visqr_27",
              "text": "I calm myself down by talking silently to myself"
            }, */
            /* {
              "value": "visqr_28",
              "text": "What I say in my inner speech makes me feel anxious"
            }, */
            {
              "value": "visqr_29",
              "text": "I use metaphors and expressions in my inner speech, such as “This is such a nightmare”"
            },
            /* {
              "value": "visqr_30",
              "text": "My train of inner verbal thought can lead to me feeling very excited"
            }, */
            /* {
              "value": "visqr_31",
              "text": "My inner speech contributes to me feeling down and depressed"
            }, */
            /* {
              "value": "visqr_32",
              "text": "When angry, my inner speech can help calm me down"
            }, */
            {
              "value": "visqr_33",
              "text": "I am surprised by the content of my inner speech"
            },
            /* {
              "value": "visqr_34",
              "text": "There are certain words or phrases that I can’t get out of my head"
            }, */
            /* {
              "value": "visqr_35",
              "text": "When I think to myself in words about upsetting things, I can easily change topics in my mind and talk to myself about other things"
            } */
          ]
        }
      ]
    }
  ]
};
  // tag the Likert grids so CSS widens the statement column / narrows the answer
  // columns (reapplied every render, so it survives cell clicks)
  const survey_function = function (survey) {
    survey.onUpdateQuestionCssClasses.add(function (_, opt) {
      if (opt.question.getType() === "matrix") {
        opt.cssClasses.mainRoot = (opt.cssClasses.mainRoot || "") + " likert-matrix";
      }
    });
  };
  return [ IVQ.makeSurvey(survey_json, { part: "part5" }, survey_function) ];
};
