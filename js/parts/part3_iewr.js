/* Part 3 — Inner speech during reading
   SurveyJS survey — edit questions here. Re-run nothing; this IS the source.
 */
window.IVQ = window.IVQ || {};
IVQ.parts.part3 = function (jsPsych) {
  const survey_json = {
  "showQuestionNumbers": "off",
  "showPrevButton": true,
  "showProgressBar": "off",
  "pageNextText": "Next",
  "pagePrevText": "Previous",
  "completeText": "Continue",
  "pages": [
    {
      "name": "iewr_instructions",
      "elements": [
        {
          "type": "html",
          "name": "iewr_instructions_h",
          "html": "<div class=\"pt-info\">Third Part<br> This part is a short survey about your inner experiences while reading.<br> Please read the questions and answer them carefully.</div>"
        }
      ]
    },
    {
      "name": "spr_inner_voice",
      "elements": [
        {
          "type": "html",
          "name": "natural_reading_q",
          "html": "<div class=\"pt-prompt\">As you read the sentences in the previous section, did it feel like your natural, everyday reading?</div>"
        },
        {
          "name": "natural_reading",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "same",
              "text": "It felt exactly like my natural, everyday reading"
            },
            {
              "value": "mostly",
              "text": "Mostly like my natural reading, with small differences"
            },
            {
              "value": "somewhat",
              "text": "Somewhat different from my natural reading"
            },
            {
              "value": "very",
              "text": "Very different from my natural reading"
            },
            {
              "value": "totally",
              "text": "Totally different from my natural reading"
            }
          ],
          "isRequired": true
        },
        {
          "type": "html",
          "name": "natural_reading_explain_q",
          "html": "<div class=\"pt-prompt\">In what way was it similar, and in what way was it different?</div>"
        },
        {
          "name": "natural_reading_explain",
          "titleLocation": "hidden",
          "type": "comment"
        },
        {
          "type": "html",
          "name": "spr_inner_voice_q",
          "html": "<div class=\"pt-prompt\">As you read the sentences in the previous section, did you HEAR an inner voice or did you just understand the words without actually hearing an inner voice?</div>"
        },
        {
          "name": "spr_inner_voice",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "I understood the words written without hearing an inner voice"
            },
            {
              "value": "2",
              "text": "I heard an inner voice reading the words while reading the sentences"
            },
            {
              "value": "3",
              "text": "I heard an inner voice reading the words only for some of the sentences (please specify)"
            },
            {
              "value": "4",
              "text": "I heard an inner voice while reading the sentences, but it was not reading the words (please specify)"
            },
            {
              "value": "5",
              "text": "other experience of inner voice (please specify)"
            },
            {
              "value": "6",
              "text": "I do not remember my inner experience while reading"
            }
          ],
          "isRequired": true
        },
        {
          "type": "html",
          "name": "explain_spr_inner_voice_q",
          "html": "<div class=\"pt-prompt\">Please explain your choice</div>"
        },
        {
          "name": "explain_spr_inner_voice",
          "titleLocation": "hidden",
          "type": "comment",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "writing_inner_voice_q",
          "html": "<div class=\"pt-prompt\">While writing your answers, did you hear an inner voice saying the words you were writing?</div>"
        },
        {
          "name": "writing_inner_voice",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "during",
              "text": "Yes — while I was writing"
            },
            {
              "value": "before",
              "text": "Yes — before writing, when I thought about and planned my answer"
            },
            {
              "value": "both",
              "text": "Yes — both before and while writing"
            },
            {
              "value": "no",
              "text": "No, I did not hear an inner voice while writing"
            }
          ],
          "isRequired": true
        }
      ]
    },
    {
      "name": "survey_inner_voice",
      "elements": [
        {
          "type": "html",
          "name": "survey_inner_voice_q",
          "html": "<div class=\"pt-prompt\">As you read these survey questions (without moving your lips), do you HEAR an inner voice or do you just understand the words without actually hearing an inner voice?</div>"
        },
        {
          "name": "survey_inner_voice",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "I understand the words written here without hearing an inner voice"
            },
            {
              "value": "2",
              "text": "I hear an inner voice reading the words of this survey"
            }
          ],
          "showOtherItem": true,
          "otherText": "other experience of inner voice (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "reading_experience",
      "elements": [
        {
          "type": "html",
          "name": "reading_experience_q",
          "html": "<div class=\"pt-prompt\">If you do not hear an inner voice while you read, how would you describe your reading experience?</div>"
        },
        {
          "name": "reading_experience",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "I have nothing on my mind; I simply understand the words I am reading"
            },
            {
              "value": "2",
              "text": "I \"see\" the text in my mind"
            },
            {
              "value": "3",
              "text": "I imagine the scenario or situation described in the text"
            }
          ],
          "showOtherItem": true,
          "otherText": "other experience (please specify)",
          "isRequired": true
        }
      ],
      "visibleIf": "{survey_inner_voice} = '1'"
    },
    {
      "name": "hearing_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "hearing_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">When you read (without moving your lips), do you EVER HEAR an inner voice or do you just understand the words you are reading without actually hearing an inner voice?</div>"
        },
        {
          "name": "hearing_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "I always understand the words I am reading without hearing an inner voice"
            },
            {
              "value": "2",
              "text": "I sometimes hear an inner voice while reading"
            },
            {
              "value": "3",
              "text": "I always hear an inner voice while reading"
            }
          ],
          "isRequired": true
        }
      ]
    },
    {
      "name": "frequency_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "frequency_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">How often do you hear an inner voice when you read?</div>"
        },
        {
          "name": "frequency_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Every time I read anything"
            },
            {
              "value": "2",
              "text": "Often"
            },
            {
              "value": "3",
              "text": "Sometimes"
            },
            {
              "value": "4",
              "text": "I’ve only heard an inner reading voice a few times"
            },
            {
              "value": "5",
              "text": "Never"
            }
          ],
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1'"
    },
    {
      "name": "hearing_inner_voice",
      "elements": [
        {
          "type": "html",
          "name": "hearing_inner_voice_q",
          "html": "<div class=\"pt-prompt\">When you hear this inner voice, does it feel more like listening or like speaking?</div>"
        },
        {
          "name": "hearing_inner_voice",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "More like listening"
            },
            {
              "value": "2",
              "text": "More like speaking"
            },
            {
              "value": "3",
              "text": "Both like listening and speaking"
            },
            {
              "value": "4",
              "text": "Neither like listening nor like speaking"
            },
            {
              "value": "5",
              "text": "Unsure"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1'"
    },
    {
      "name": "material_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "material_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">On which occasions do you usually hear such an inner voice? Please check all that apply.</div>"
        },
        {
          "name": "material_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "When I read print books"
            },
            {
              "value": "2",
              "text": "When I read print magazines, journals or newspapers"
            },
            {
              "value": "3",
              "text": "When I read internet content such as blogs"
            },
            {
              "value": "4",
              "text": "When I read social network posts"
            },
            {
              "value": "5",
              "text": "When I read emails or text messages"
            },
            {
              "value": "6",
              "text": "When I read printed or handwritten letters or notes"
            },
            {
              "value": "7",
              "text": "When I read signs on walls or shop windows"
            },
            {
              "value": "8",
              "text": "When I read labels on food containers, medicine bottles or other commercial products"
            }
          ],
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1'"
    },
    {
      "name": "whose_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "whose_voice_reading_q",
          "html": "<div class=\"pt-prompt\">Whose voice do you hear as you read? Please check all that apply.</div>"
        },
        {
          "name": "whose_voice_reading",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "My own voice"
            },
            {
              "value": "2",
              "text": "The voice of a story character"
            },
            {
              "value": "3",
              "text": "The voice of a celebrity or famous person (e.g. an actor)"
            },
            {
              "value": "4",
              "text": "The voice of a family member (including relatives by marriage)"
            },
            {
              "value": "5",
              "text": "The voice of a friend"
            },
            {
              "value": "6",
              "text": "The voice of whoever sends me a text message, email or note"
            },
            {
              "value": "7",
              "text": "The voice of a teacher or acquaintance A voice I recognize, but which I can’t identify"
            },
            {
              "value": "8",
              "text": "A voice I don’t recognize as being anyone in particular"
            }
          ],
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1'"
    },
    /* {
      "name": "different_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "different_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">How many different inner voices have you heard over the course of your reading life?</div>"
        },
        {
          "name": "different_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Only one"
            },
            {
              "value": "2",
              "text": "Two"
            },
            {
              "value": "3",
              "text": "More than two"
            },
            {
              "value": "4",
              "text": "Unsure"
            }
          ],
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1'"
    }, */
    {
      "name": "gender_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "gender_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">How would you characterize the gender of your inner reading voice(s)?</div>"
        },
        {
          "name": "gender_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Always the same gender as mine"
            },
            {
              "value": "2",
              "text": "Always a different gender than mine"
            },
            {
              "value": "3",
              "text": "The gender varies (e.g. depending on the voice or depending on what I am reading)"
            },
            {
              "value": "4",
              "text": "I am not able to tell what the gender is"
            }
          ],
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1'"
    },
    {
      "name": "accent_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "accent_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">How would you characterize the accent of your inner reading voice(s)?</div>"
        },
        {
          "name": "accent_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Always the same accent as my own speaking voice"
            },
            {
              "value": "2",
              "text": "Always an accent different from my own speaking voice"
            },
            {
              "value": "3",
              "text": "The accent varies (e.g. depending on the voice or depending on what I am reading)"
            },
            {
              "value": "4",
              "text": "I am not able to tell what the accent is like"
            }
          ],
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1'"
    },
    {
      "name": "pitch_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "pitch_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">How would you characterize the pitch of your inner reading voice(s)?</div>"
        },
        {
          "name": "pitch_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Always the same pitch as my own speaking voice"
            },
            {
              "value": "2",
              "text": "Always a pitch different from my own speaking voice (e.g. higher or lower-pitched)"
            },
            {
              "value": "3",
              "text": "The pitch varies (e.g. depending on the voice or depending on what I am reading)"
            },
            {
              "value": "4",
              "text": "I am not able to tell what the pitch is like"
            }
          ],
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1'"
    },
    {
      "name": "loudness_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "loudness_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">How would you characterize the loudness of your inner reading voice(s)?</div>"
        },
        {
          "name": "loudness_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Always the same loudness as my own normal speaking voice"
            },
            {
              "value": "2",
              "text": "Always a different loudness than my own normal speaking voice (e.g. softer or louder)"
            },
            {
              "value": "3",
              "text": "The loudness varies (e.g. depending on the voice or depending on what I am reading)"
            },
            {
              "value": "4",
              "text": "I am not able to tell what the loudness is like"
            }
          ],
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1'"
    },
    {
      "name": "emotional_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "emotional_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">How would you characterize the emotional tone of your inner reading voice(s)?</div>"
        },
        {
          "name": "emotional_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "The same emotional tone is always present no matter what I am reading (e.g. neutral, happy, excited, sad, angry or something else)"
            },
            {
              "value": "2",
              "text": "The emotional tone varies (e.g. depending on the voice or depending on what I am reading)"
            },
            {
              "value": "3",
              "text": "I am not able to tell what the emotional tone is like"
            }
          ],
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1'"
    },
    {
      "name": "change_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "change_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">Can you change one or more qualities of your inner reading voice(s) when you want to?</div>"
        },
        {
          "name": "change_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Yes"
            },
            {
              "value": "2",
              "text": "No"
            }
          ],
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1'"
    },
    {
      "name": "quality_change_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "quality_change_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">Which quality can you change at will? Check all that apply.</div>"
        },
        {
          "name": "quality_change_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "I can choose to hear it or not hear it"
            },
            {
              "value": "2",
              "text": "I can change whose voice I hear"
            },
            {
              "value": "3",
              "text": "I can change the pitch of the voice"
            },
            {
              "value": "4",
              "text": "I can change the accent of the voice"
            },
            {
              "value": "5",
              "text": "I can change the loudness of the voice"
            },
            {
              "value": "6",
              "text": "I can change the emotional tone of the voice"
            },
            {
              "value": "7",
              "text": "I can change how fast the voice reads"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1' and {change_inner_voice_reading} <> '2'"
    },
    {
      "name": "having_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "having_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">Do you think that having an inner reading voice adds to your reading experience (e.g makes it more vivid, engaging, interesting, fun, etc.)?</div>"
        },
        {
          "name": "having_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Yes"
            },
            {
              "value": "2",
              "text": "No"
            },
            /*{
              "value": "3",
              "text": "I am not sure how to answer this question"
            } */
          ],
          "isRequired": true
        },
        {
          "type": "html",
          "name": "explain_having_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">Please explain your choice</div>"
        },
        {
          "name": "explain_having_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "comment",
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1'"
    },
    {
      "name": "harder_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "harder_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">Do you think that having an inner reading voice makes reading harder (e.g. makes it slower, distracts you, etc.)?</div>"
        },
        {
          "name": "harder_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Yes"
            },
            {
              "value": "2",
              "text": "No"
            },
            {
              "value": "3",
              "text": "The opposite, it makes reading easier"
            },
            /*{
              "value": "4",
              "text": "I am not sure how to answer this question"
            } */
          ],
          "isRequired": true
        },
        {
          "type": "html",
          "name": "explain_harder_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">Please explain your choice</div>"
        },
        {
          "name": "explain_harder_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "comment",
          "isRequired": true
        }
      ],
      "visibleIf": "not ({spr_inner_voice} = '1' and {survey_inner_voice} = '1' and {hearing_inner_voice_reading} = '1')"
    },
    {
      "name": "most_people_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "most_people_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">In your personal opinion, do most people have an inner reading voice?</div>"
        },
        {
          "name": "most_people_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Yes"
            },
            {
              "value": "2",
              "text": "No"
            },
            {
              "value": "3",
              "text": "Unsure"
            }
          ],
          "isRequired": true
        }
      ],
      "visibleIf": "not ({spr_inner_voice} = '1' and {survey_inner_voice} = '1' and {hearing_inner_voice_reading} = '1')"
    }
  ]
};
  return [ IVQ.makeSurvey(survey_json, { part: "part3" }) ];
};
