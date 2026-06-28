/* Part 4 — Inner speech during diverse text types
   SurveyJS survey — edit questions here. Re-run nothing; this IS the source.
 */
window.IVQ = window.IVQ || {};
IVQ.parts.part4 = function (jsPsych) {
  const survey_json = {
  "showQuestionNumbers": "off",
  "showPrevButton": true,
  "showProgressBar": "off",
  "pageNextText": "Next",
  "pagePrevText": "Previous",
  "completeText": "Continue",
  "pages": [
    {
      "name": "alphabet",
      "elements": [
        {
          "type": "html",
          "name": "alphabet_q",
          "html": "<div class=\"pt-prompt\">Please read the following: A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.<br> While reading this, did you</div>"
        },
        {
          "name": "alphabet",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Hear\\say the letters' names in your head"
            },
            {
              "value": "2",
              "text": "Hear the letters' sounds (as phonemes) in your head"
            },
            {
              "value": "3",
              "text": "Hear\\sing the alphabet (A, B, C) song"
            },
            {
              "value": "4",
              "text": "Not hear a voice \u2014 just understood the text"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "happy_birthday",
      "elements": [
        {
          "type": "html",
          "name": "happy_birthday_q",
          "html": "<div class=\"pt-prompt\">Please read the following:<br> Happy birthday to you<br> Happy birthday to you<br> Happy birthday, dear Emily<br> Happy birthday to you<br> While reading this, did you</div>"
        },
        {
          "name": "happy_birthday",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Hear\\Sing the Happy Birthday song in your head"
            },
            {
              "value": "2",
              "text": "Hear\\say the words in your head"
            },
            {
              "value": "3",
              "text": "Not hear a voice \u2014 just understood the words"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    /* {
      "name": "twinkle_twinkle",
      "elements": [
        {
          "type": "html",
          "name": "twinkle_twinkle_q",
          "html": "<div class=\"pt-prompt\">Please read the following:<br> Twinkle, twinkle little star.<br> How I wonder what you are.<br> Up above the world so high.<br> Like a diamond in the sky.<br> Twinkle, twinkle little star.<br> How I wonder what you are.<br> While reading this, did you</div>"
        },
        {
          "name": "twinkle_twinkle",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Hear\\Sing the Twinkle, Twinkle Little Star song in your head"
            },
            {
              "value": "2",
              "text": "Hear\\say the words in your head"
            },
            {
              "value": "3",
              "text": "Not hear a voice \u2014 just understood the words"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    }, */
    {
      "name": "harry_potter_book",
      "elements": [
        {
          "type": "html",
          "name": "harry_potter_book_q",
          "html": "<div class=\"pt-prompt\">Have you read the Harry Potter novels?</div>"
        },
        {
          "name": "harry_potter_book",
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
        },
        {
          "type": "html",
          "name": "harry_potter_audio_book_q",
          "html": "<div class=\"pt-prompt\">Have you listened to the Harry Potter audio books?</div>"
        },
        {
          "name": "harry_potter_audio_book",
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
        },
        {
          "type": "html",
          "name": "harry_potter_movie_q",
          "html": "<div class=\"pt-prompt\">Have you watched the Harry Potter movies?</div>"
        },
        {
          "name": "harry_potter_movie",
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
        },
        {
          "type": "html",
          "name": "harry_potter_q",
          "html": "<div class=\"pt-prompt\">Please read the following:<br> “Wingardium Leviosa!” he shouted, waving his long arms like a windmill.<br> “You’re saying it wrong,” Harry heard Hermione snap. “It’s Wing-gar-dium Levi-o-sa, make the ‘gar’ nice and long.”<br> “You do it, then, if you’re so clever,” Ron snarled.<br><br><br>Now answer the questions below about how you experienced reading this passage.</div>"
        },
        {
          "type": "html",
          "name": "hp_hear_q",
          "html": "<div class=\"pt-prompt\">Which of the words did you hear in your head?</div>"
        },
        {
          "name": "hp_hear",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "all",
              "text": "I heard all the words in my head"
            },
            {
              "value": "quoted",
              "text": "Only the spoken lines (not the narration)"
            },
            {
              "value": "none",
              "text": "I didn't hear any words in my head"
            }
          ],
          "showOtherItem": true,
          "otherText": "I only heard some of the words (please specify which)",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "hp_voice_q",
          "visibleIf": "{hp_hear} <> 'none'",
          "html": "<div class=\"pt-prompt\">In whose or what voice did you hear it? (select all that apply)</div>"
        },
        {
          "name": "hp_voice",
          "visibleIf": "{hp_hear} <> 'none'",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "own",
              "text": "My own voice"
            },
            {
              "value": "narrator",
              "text": "A general narrator voice"
            },
            {
              "value": "char_diff",
              "text": "Different voices for the different characters"
            },
            {
              "value": "narration_narrator",
              "text": "The narration in a general narrator voice"
            },
            {
              "value": "narration_own",
              "text": "The narration in my own voice"
            },
            {
              "value": "actors",
              "text": "Voices like the film actors"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "hp_accent_q",
          "visibleIf": "{hp_hear} <> 'none'",
          "html": "<div class=\"pt-prompt\">The accent(s) you heard… (select all that apply)</div>"
        },
        {
          "name": "hp_accent",
          "visibleIf": "{hp_hear} <> 'none'",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "similar",
              "text": "Similar to my own accent"
            },
            {
              "value": "different",
              "text": "Different from my own accent"
            },
            {
              "value": "british",
              "text": "The characters sounded British"
            }
          ],
          "showNoneItem": true,
          "noneText": "I didn't notice an accent"
        },
        {
          "type": "html",
          "name": "hp_gender_q",
          "visibleIf": "{hp_hear} <> 'none'",
          "html": "<div class=\"pt-prompt\">The gender of the voice(s)… (select all that apply)</div>"
        },
        {
          "name": "hp_gender",
          "visibleIf": "{hp_hear} <> 'none'",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "similar",
              "text": "Similar to my own gender"
            },
            {
              "value": "by_character",
              "text": "Changed according to each character's gender"
            },
            {
              "value": "narrator_similar",
              "text": "The narrator's voice matched my own gender"
            }
          ],
          "showNoneItem": true,
          "noneText": "I didn't notice"
        },
        {
          "type": "html",
          "name": "hp_spell_q",
          "visibleIf": "{hp_hear} <> 'none'",
          "html": "<div class=\"pt-prompt\">How did you hear the spell “Wingardium Leviosa!”? (select all that apply)</div>"
        },
        {
          "name": "hp_spell",
          "visibleIf": "{hp_hear} <> 'none'",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "normal",
              "text": "At a normal speaking volume"
            },
            {
              "value": "shout",
              "text": "As a shout / louder"
            },
            {
              "value": "diff_volume",
              "text": "At a different volume than the surrounding words"
            }
          ],
          "showOtherItem": true,
          "otherText": "I heard “Wing-gar-dium Levi-o-sa” differently from the other words (please specify)"
        },
        {
          "type": "html",
          "name": "hp_visual_q",
          "html": "<div class=\"pt-prompt\">Did you picture the scene? (select all that apply)</div>"
        },
        {
          "name": "hp_visual",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "pictures",
              "text": "I saw it as still pictures"
            },
            {
              "value": "movie",
              "text": "I saw it like a movie"
            }
          ],
          "showNoneItem": true,
          "noneText": "I didn't picture it"
        }
      ]
    },
    {
      "name": "harry_potter_youtube",
      "elements": [
        {
          "type": "html",
          "name": "harry_potter_youtube_h",
          "html": "<div class=\"pt-prompt\">Please watch the following video</div><div class=\"pt-video\"><video controls preload=\"metadata\" src=\"stimuli/media/harry_potter.mp4\"></video></div>"
        },
        {
          "type": "html",
          "name": "harry_potter_scene_q",
          "html": "<div class=\"pt-prompt\"><br><br>Now answer the question below about how you experienced reading this passage.</div>"
        },
        {
          "name": "harry_potter_scene",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "Same as the voices I heard while reading"
            },
            {
              "value": "2",
              "text": "Different from the voices I heard while reading"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "harry_potter_2",
      "elements": [
        {
          "type": "html",
          "name": "harry_potter_2_q",
          "html": "<div class=\"pt-prompt\">Please read again the following:<br> “Wingardium Leviosa!” he shouted, waving his long arms like a windmill.<br> “You’re saying it wrong,” Harry heard Hermione snap. “It’s Wing-gar-dium Levi-o-sa, make the ‘gar’ nice and long.”<br> “You do it, then, if you’re so clever,” Ron snarled.<br><br><br>Now answer the questions below about how you experienced reading this passage.</div>"
        },
        {
          "type": "html",
          "name": "hp2_hear_q",
          "html": "<div class=\"pt-prompt\">Which of the words did you hear in your head?</div>"
        },
        {
          "name": "hp2_hear",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "all",
              "text": "I heard all the words in my head"
            },
            {
              "value": "quoted",
              "text": "Only the spoken lines (not the narration)"
            },
            {
              "value": "none",
              "text": "I didn't hear any words in my head"
            }
          ],
          "showOtherItem": true,
          "otherText": "I only heard some of the words (please specify which)",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "hp2_voice_q",
          "visibleIf": "{hp2_hear} <> 'none'",
          "html": "<div class=\"pt-prompt\">In whose or what voice did you hear it? (select all that apply)</div>"
        },
        {
          "name": "hp2_voice",
          "visibleIf": "{hp2_hear} <> 'none'",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "own",
              "text": "My own voice"
            },
            {
              "value": "narrator",
              "text": "A general narrator voice"
            },
            {
              "value": "char_diff",
              "text": "Different voices for the different characters"
            },
            {
              "value": "narration_narrator",
              "text": "The narration in a general narrator voice"
            },
            {
              "value": "narration_own",
              "text": "The narration in my own voice"
            },
            {
              "value": "actors",
              "text": "Voices like the film actors"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "hp2_accent_q",
          "visibleIf": "{hp2_hear} <> 'none'",
          "html": "<div class=\"pt-prompt\">The accent(s) you heard… (select all that apply)</div>"
        },
        {
          "name": "hp2_accent",
          "visibleIf": "{hp2_hear} <> 'none'",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "similar",
              "text": "Similar to my own accent"
            },
            {
              "value": "different",
              "text": "Different from my own accent"
            },
            {
              "value": "british",
              "text": "The characters sounded British"
            }
          ],
          "showNoneItem": true,
          "noneText": "I didn't notice an accent"
        },
        {
          "type": "html",
          "name": "hp2_gender_q",
          "visibleIf": "{hp2_hear} <> 'none'",
          "html": "<div class=\"pt-prompt\">The gender of the voice(s)… (select all that apply)</div>"
        },
        {
          "name": "hp2_gender",
          "visibleIf": "{hp2_hear} <> 'none'",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "similar",
              "text": "Similar to my own gender"
            },
            {
              "value": "by_character",
              "text": "Changed according to each character's gender"
            },
            {
              "value": "narrator_similar",
              "text": "The narrator's voice matched my own gender"
            }
          ],
          "showNoneItem": true,
          "noneText": "I didn't notice"
        },
        {
          "type": "html",
          "name": "hp2_emphasis_q",
          "visibleIf": "{hp2_hear} <> 'none'",
          "html": "<div class=\"pt-prompt\">How did you hear the spell “Wingardium Leviosa!”? (select all that apply)</div>"
        },
        {
          "name": "hp2_emphasis",
          "visibleIf": "{hp2_hear} <> 'none'",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "normal",
              "text": "At a normal speaking volume"
            },
            {
              "value": "loud",
              "text": "As a shout / louder"
            },
            {
              "value": "diff_volume",
              "text": "At a different volume than the surrounding words"
            }
          ],
          "showOtherItem": true,
          "otherText": "I heard “Wing-gar-dium Levi-o-sa” differently from the other words (please specify)"
        },
        {
          "type": "html",
          "name": "hp2_visual_q",
          "html": "<div class=\"pt-prompt\">Did you picture the scene? (select all that apply)</div>"
        },
        {
          "name": "hp2_visual",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "pictures",
              "text": "I saw it as still pictures"
            },
            {
              "value": "movie",
              "text": "I saw it like a movie"
            }
          ],
          "showNoneItem": true,
          "noneText": "I didn't picture it"
        },
        {
          "type": "html",
          "name": "harry_potter_2_diff_q",
          "html": "<div class=\"pt-prompt\">Did you notice any differences between your first and second readings of the text? If so, what were they?</div>"
        },
        {
          "name": "harry_potter_2_diff",
          "titleLocation": "hidden",
          "type": "comment",
          "isRequired": true
        }
      ]
    },
    {
      "name": "sherlock_holmes",
      "elements": [
        {
          "type": "html",
          "name": "sherlock_holmes_q",
          "html": "<div class=\"pt-prompt\">Please read the following:<br> \"We came here on business,\" said Stamford, sitting down on a high three-legged stool, and pushing another one in my direction with his foot. \"My friend here, Dr. Watson, wants to take diggings; and as you were complaining that you could get no one to go halves with you, I thought that I had better bring you together.\"<br> Sherlock Holmes seemed delighted at the idea of sharing his rooms with me. \"I have my eye on a suite in Baker Street,\" he said, \"which would suit us down to the ground. You don't mind the smell of strong tobacco, I hope?\"<br> \"I always smoke 'ship's' myself,\" I answered.<br> \"That's good enough. I generally have chemicals about, and occasionally do experiments. Would that annoy you?\"<br> \"By no means.\"<br><br><br>Now answer the questions below about how you experienced reading this passage.</div>"
        },
        {
          "type": "html",
          "name": "sh_hear_q",
          "html": "<div class=\"pt-prompt\">Which of the words did you hear in your head?</div>"
        },
        {
          "name": "sh_hear",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "all",
              "text": "I heard all the words in my head"
            },
            {
              "value": "quoted",
              "text": "Only the spoken lines (not the narration)"
            },
            {
              "value": "none",
              "text": "I didn't hear any words in my head"
            }
          ],
          "showOtherItem": true,
          "otherText": "I only heard some of the words (please specify which)",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "sh_voice_q",
          "html": "<div class=\"pt-prompt\">In whose or what voice did you hear it? (select all that apply)</div>"
        },
        {
          "name": "sh_voice",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "own",
              "text": "My own voice"
            },
            {
              "value": "narrator",
              "text": "A general narrator voice"
            },
            {
              "value": "char_diff",
              "text": "Different voices for the different characters"
            },
            {
              "value": "narration_narrator",
              "text": "The narration in a general narrator voice"
            },
            {
              "value": "narration_own",
              "text": "The narration in my own voice"
            },
            {
              "value": "actors",
              "text": "Voices like the film/TV actors"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "sh_accent_q",
          "html": "<div class=\"pt-prompt\">The accent(s) you heard… (select all that apply)</div>"
        },
        {
          "name": "sh_accent",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "similar",
              "text": "Similar to my own accent"
            },
            {
              "value": "different",
              "text": "Different from my own accent"
            },
            {
              "value": "british",
              "text": "The characters sounded British"
            }
          ],
          "showNoneItem": true,
          "noneText": "I didn't notice an accent"
        },
        {
          "type": "html",
          "name": "sh_gender_q",
          "html": "<div class=\"pt-prompt\">The gender of the voice(s)… (select all that apply)</div>"
        },
        {
          "name": "sh_gender",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "similar",
              "text": "Similar to my own gender"
            },
            {
              "value": "all_male",
              "text": "The voices were all male"
            },
            {
              "value": "chars_male_narrator_mine",
              "text": "The characters were male and the narrator matched my own gender"
            }
          ],
          "showNoneItem": true,
          "noneText": "I didn't notice"
        },
        {
          "type": "html",
          "name": "sh_visual_q",
          "html": "<div class=\"pt-prompt\">Did you picture the scene? (select all that apply)</div>"
        },
        {
          "name": "sh_visual",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "pictures",
              "text": "I saw it as still pictures"
            },
            {
              "value": "movie",
              "text": "I saw it like a movie"
            }
          ],
          "showNoneItem": true,
          "noneText": "I didn't picture it"
        }
      ]
    },
    {
      "name": "winnie_the_pooh",
      "elements": [
        {
          "type": "html",
          "name": "winnie_the_pooh_q",
          "html": "<div class=\"pt-prompt\">Please read the following:<br> So Winnie-the-Pooh went round to his friend Christopher Robin, who lived behind a green door in another part of the forest.<br> \"Good morning, Christopher Robin,\" he said.<br> \"Good morning, Winnie-the-Pooh,\" said you.<br> \"I wonder if you've got such a thing as a balloon about you?\"<br> \"A balloon?\"<br> \"Yes, I just said to myself coming along: 'I wonder if Christopher Robin has such a thing as a balloon about him?' I just said it to myself, thinking of balloons, and wondering.\"<br> \"What do you want a balloon for?\" you said.<br> Winnie-the-Pooh looked round to see that nobody was listening, put his paw to his mouth, and said in a deep whisper: \"Honey!\"<br><br><br>Now answer the questions below about how you experienced reading this passage.</div>"
        },
        {
          "type": "html",
          "name": "wp_hear_q",
          "html": "<div class=\"pt-prompt\">Which of the words did you hear in your head?</div>"
        },
        {
          "name": "wp_hear",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "all",
              "text": "I heard all the words in my head"
            },
            {
              "value": "quoted",
              "text": "Only the spoken lines (not the narration)"
            },
            {
              "value": "none",
              "text": "I didn't hear any words in my head"
            }
          ],
          "showOtherItem": true,
          "otherText": "I only heard some of the words (please specify which)",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "wp_voice_q",
          "html": "<div class=\"pt-prompt\">In whose or what voice did you hear it? (select all that apply)</div>"
        },
        {
          "name": "wp_voice",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "own",
              "text": "My own voice"
            },
            {
              "value": "narrator",
              "text": "A general narrator voice"
            },
            {
              "value": "char_diff",
              "text": "Different voices for the different characters"
            },
            {
              "value": "narration_narrator",
              "text": "The narration in a general narrator voice"
            },
            {
              "value": "narration_own",
              "text": "The narration in my own voice"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "wp_accent_q",
          "html": "<div class=\"pt-prompt\">The accent(s) you heard… (select all that apply)</div>"
        },
        {
          "name": "wp_accent",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "similar",
              "text": "Similar to my own accent"
            },
            {
              "value": "different",
              "text": "Different from my own accent"
            }
          ],
          "showNoneItem": true,
          "noneText": "I didn't notice an accent"
        },
        {
          "type": "html",
          "name": "wp_gender_q",
          "html": "<div class=\"pt-prompt\">The gender of the voice(s)… (select all that apply)</div>"
        },
        {
          "name": "wp_gender",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "similar",
              "text": "Similar to my own gender"
            },
            {
              "value": "all_male",
              "text": "The voices were all male"
            },
            {
              "value": "chars_male_narrator_mine",
              "text": "The characters were male and the narrator matched my own gender"
            }
          ],
          "showNoneItem": true,
          "noneText": "I didn't notice"
        },
        {
          "type": "html",
          "name": "wp_nonhuman_q",
          "html": "<div class=\"pt-prompt\">Winnie-the-Pooh is not an ordinary person. The voice you heard for him was…</div>"
        },
        {
          "name": "wp_nonhuman",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "human",
              "text": "The same as a human voice"
            },
            {
              "value": "didnt",
              "text": "I didn't hear a voice for Winnie-the-Pooh"
            }
          ],
          "showOtherItem": true,
          "otherText": "Different from a human voice (please specify how)"
        },
        {
          "type": "html",
          "name": "wp_emphasis_q",
          "html": "<div class=\"pt-prompt\">How did you hear \"Honey!\"? (select all that apply)</div>"
        },
        {
          "name": "wp_emphasis",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "normal",
              "text": "At a normal speaking volume"
            },
            {
              "value": "loud",
              "text": "As a shout / louder"
            },
            {
              "value": "diff_volume",
              "text": "At a different volume than the surrounding words"
            }
          ],
          "showOtherItem": true,
          "otherText": "I heard “Honey!” in some other way (please specify)"
        },
        {
          "type": "html",
          "name": "wp_visual_q",
          "html": "<div class=\"pt-prompt\">Did you picture the scene? (select all that apply)</div>"
        },
        {
          "name": "wp_visual",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "pictures",
              "text": "I saw it as still pictures"
            },
            {
              "value": "movie",
              "text": "I saw it like a movie"
            }
          ],
          "showNoneItem": true,
          "noneText": "I didn't picture it"
        }
      ]
    },
    {
      "name": "genesis",
      "elements": [
        {
          "type": "html",
          "name": "genesis_q",
          "html": "<div class=\"pt-prompt\">Please read the following:<br> [1:1] In the beginning when God created the heavens and the earth,<br> [1:2] the earth was a formless void and darkness covered the face of the deep, while a wind from God swept over the face of the waters.<br> [1:3] Then God said, \"Let there be light\"; and there was light.<br> [1:4] And God saw that the light was good; and God separated the light from the darkness.<br> [1:5] God called the light Day, and the darkness he called Night. And there was evening and there was morning, the first day.<br><br><br>Now answer the questions below about how you experienced reading this passage.</div>"
        },
        {
          "type": "html",
          "name": "gn_hear_q",
          "html": "<div class=\"pt-prompt\">Which of the words did you hear in your head?</div>"
        },
        {
          "name": "gn_hear",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "all",
              "text": "I heard all the words in my head"
            },
            {
              "value": "quoted",
              "text": "Only God's line (not the narration)"
            },
            {
              "value": "none",
              "text": "I didn't hear any words in my head"
            }
          ],
          "showOtherItem": true,
          "otherText": "I only heard some of the words (please specify which)",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "gn_voice_q",
          "html": "<div class=\"pt-prompt\">In whose or what voice did you hear it? (select all that apply)</div>"
        },
        {
          "name": "gn_voice",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "own",
              "text": "My own voice"
            },
            {
              "value": "narrator",
              "text": "A general narrator voice"
            },
            {
              "value": "narration_narrator",
              "text": "The narration in a general narrator voice"
            },
            {
              "value": "narration_own",
              "text": "The narration in my own voice"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "gn_accent_q",
          "html": "<div class=\"pt-prompt\">The accent(s) you heard… (select all that apply)</div>"
        },
        {
          "name": "gn_accent",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "similar",
              "text": "Similar to my own accent"
            },
            {
              "value": "different",
              "text": "Different from my own accent"
            }
          ],
          "showNoneItem": true,
          "noneText": "I didn't notice an accent"
        },
        {
          "type": "html",
          "name": "gn_gender_q",
          "html": "<div class=\"pt-prompt\">The gender of the voice(s)… (select all that apply)</div>"
        },
        {
          "name": "gn_gender",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "similar",
              "text": "Similar to my own gender"
            },
            {
              "value": "different",
              "text": "Different from my own gender"
            }
          ],
          "showNoneItem": true,
          "noneText": "I didn't notice"
        },
        {
          "type": "html",
          "name": "gn_nonhuman_q",
          "html": "<div class=\"pt-prompt\">God is not an ordinary person. The voice you heard for God was…</div>"
        },
        {
          "name": "gn_nonhuman",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "human",
              "text": "The same as a human voice"
            },
            {
              "value": "didnt",
              "text": "I didn't hear a voice for God"
            }
          ],
          "showOtherItem": true,
          "otherText": "Different from a human voice (please specify how)"
        },
        {
          "type": "html",
          "name": "gn_visual_q",
          "html": "<div class=\"pt-prompt\">Did you picture the scene? (select all that apply)</div>"
        },
        {
          "name": "gn_visual",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "pictures",
              "text": "I saw it as still pictures"
            },
            {
              "value": "movie",
              "text": "I saw it like a movie"
            }
          ],
          "showNoneItem": true,
          "noneText": "I didn't picture it"
        }
      ]
    },
    {
      "name": "non_words",
      "elements": [
        {
          "type": "html",
          "name": "non_words_q",
          "html": "<div class=\"pt-prompt\">Please read the following:<br> THI SPLANKLERS RURNED EM APRILORICALLY ELFBY ERTFING FOT REMORTLY SOTHCLING MUP BROLEN<br><br><br>Now answer the questions below about how you experienced reading this passage.</div>"
        },
        {
          "name": "non_words",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "I heard all the words in my head"
            },
            {
              "value": "2",
              "text": "I heard all the words in my own voice"
            },
            {
              "value": "3",
              "text": "I heard all the words in a general voice"
            },
            {
              "value": "4",
              "text": "I did not hear any voice in my head"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "trump_tweet",
      "elements": [
        {
          "type": "html",
          "name": "trump_tweet_q",
          "html": "<div class=\"pt-media\"><img src=\"stimuli/media/trump_tweet.png\" alt=\"stimulus image\"></div><div class=\"pt-prompt\">Please read the text above.<br><br><br>Now answer the questions below about how you experienced reading this passage.</div>"
        },
        {
          "type": "html",
          "name": "tr_hear_q",
          "html": "<div class=\"pt-prompt\">Which of the words did you hear in your head?</div>"
        },
        {
          "name": "tr_hear",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "all",
              "text": "I heard all the words in my head"
            },
            {
              "value": "content",
              "text": "Only the tweet text (not the handle or date)"
            },
            {
              "value": "none",
              "text": "I didn't hear any words in my head"
            }
          ],
          "showOtherItem": true,
          "otherText": "I only heard some of the words (please specify which)",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "tr_voice_q",
          "html": "<div class=\"pt-prompt\">In whose or what voice did you hear it? (select all that apply)</div>"
        },
        {
          "name": "tr_voice",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "general",
              "text": "A general, non-specific voice"
            },
            {
              "value": "own",
              "text": "My own voice"
            },
            {
              "value": "trump",
              "text": "The tweet's content in Trump's voice"
            },
            {
              "value": "handle_date_own",
              "text": "The handle and date in my own voice"
            },
            {
              "value": "content_own",
              "text": "The tweet's content in my own voice"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "tr_accent_q",
          "html": "<div class=\"pt-prompt\">Accent / gender of the voice (select all that apply)</div>"
        },
        {
          "name": "tr_accent",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "accent_similar",
              "text": "The accent was similar to my own"
            },
            {
              "value": "gender_similar",
              "text": "The gender was similar to my own"
            }
          ],
          "showNoneItem": true,
          "noneText": "I didn't notice"
        },
        {
          "type": "html",
          "name": "tr_nytimes_q",
          "html": "<div class=\"pt-prompt\">How did you read “@nytimes”?</div>"
        },
        {
          "name": "tr_nytimes",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "spoken",
              "text": "As “at New York Times”"
            },
            {
              "value": "silent",
              "text": "I understood it without hearing it"
            },
            {
              "value": "written",
              "text": "As it is written (“@nytimes”)"
            }
          ]
        },
        {
          "type": "html",
          "name": "tr_handle_q",
          "html": "<div class=\"pt-prompt\">How did you read “@realDonaldTrump”?</div>"
        },
        {
          "name": "tr_handle",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "spoken",
              "text": "As “at real Donald Trump”"
            },
            {
              "value": "silent",
              "text": "I understood it without hearing it"
            },
            {
              "value": "written",
              "text": "As it is written (“@realDonaldTrump”)"
            }
          ]
        },
        {
          "type": "html",
          "name": "tr_date_q",
          "html": "<div class=\"pt-prompt\">How did you read “7:34 PM Apr 11, 2020”?</div>"
        },
        {
          "name": "tr_date",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "spoken",
              "text": "As spoken out (“seven thirty-four p.m., April eleventh, twenty twenty”)"
            },
            {
              "value": "silent",
              "text": "I understood it without hearing it"
            },
            {
              "value": "written",
              "text": "As it is written"
            }
          ]
        }
      ]
    },
    {
      "name": "mom_text_1",
      "elements": [
        {
          "type": "html",
          "name": "mom_text_1_q",
          "html": "<div class=\"pt-media\"><img src=\"stimuli/media/mom_text_1.jpeg\" alt=\"stimulus image\"></div><div class=\"pt-prompt\">Please read the text above.<br><br><br>Now answer the questions below about how you experienced reading this passage.</div>"
        },
        {
          "type": "html",
          "name": "m1_hear_q",
          "html": "<div class=\"pt-prompt\">Which of the words did you hear in your head?</div>"
        },
        {
          "name": "m1_hear",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "all",
              "text": "I heard all the words in my head"
            },
            {
              "value": "one_side",
              "text": "Only one side of the conversation"
            },
            {
              "value": "none",
              "text": "I didn't hear any words in my head"
            }
          ],
          "showOtherItem": true,
          "otherText": "I only heard some of the words (please specify which)",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "m1_voice_q",
          "html": "<div class=\"pt-prompt\">In whose or what voice did you hear it? (select all that apply)</div>"
        },
        {
          "name": "m1_voice",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "same_general",
              "text": "All in the same general, non-specific voice"
            },
            {
              "value": "own",
              "text": "All in my own voice"
            },
            {
              "value": "each_diff",
              "text": "Each side in a different voice"
            },
            {
              "value": "mom_own",
              "text": "One side in my mom's voice and the other in my own voice"
            },
            {
              "value": "female_other",
              "text": "One side in a general female voice and the other in a general male/female voice"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "m1_accent_q",
          "html": "<div class=\"pt-prompt\">Accent (select all that apply)</div>"
        },
        {
          "name": "m1_accent",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "similar",
              "text": "Similar to my own accent"
            },
            {
              "value": "each_diff",
              "text": "Each side in a different accent"
            },
            {
              "value": "one_side",
              "text": "Only one side had an accent similar to my own"
            },
            {
              "value": "both_same",
              "text": "Both sides in the same accent"
            }
          ],
          "showNoneItem": true,
          "noneText": "I didn't notice"
        },
        {
          "type": "html",
          "name": "m1_tone_q",
          "html": "<div class=\"pt-prompt\">Emotional tone (select all that apply)</div>"
        },
        {
          "name": "m1_tone",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "each_diff",
              "text": "Each side in a different emotional tone"
            },
            {
              "value": "both_same",
              "text": "Both sides in the same emotional tone"
            }
          ]
        },
        {
          "type": "html",
          "name": "m1_volume_q",
          "html": "<div class=\"pt-prompt\">Volume (select all that apply)</div>"
        },
        {
          "name": "m1_volume",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "each_diff",
              "text": "Each side at a different volume"
            },
            {
              "value": "both_same",
              "text": "Both sides at the same volume"
            }
          ]
        },
        {
          "type": "html",
          "name": "m1_abbr_q",
          "html": "<div class=\"pt-prompt\">How did you read “WTF”?</div>"
        },
        {
          "name": "m1_abbr",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "silent",
              "text": "I understood it without hearing it"
            },
            {
              "value": "letters",
              "text": "As the letters “W”, “T”, “F”"
            },
            {
              "value": "whatthef",
              "text": "As “What the F”"
            },
            {
              "value": "whatthefuck",
              "text": "As “What the Fuck”"
            },
            {
              "value": "wtf_fantastic",
              "text": "As “Well That's Fantastic”"
            }
          ]
        }
      ]
    },
    {
      "name": "mom_text_2",
      "elements": [
        {
          "type": "html",
          "name": "mom_text_2_q",
          "html": "<div class=\"pt-media\"><img src=\"stimuli/media/mom_text_2.jpg\" alt=\"stimulus image\"></div><div class=\"pt-prompt\">Please read the text above.<br><br><br>Now answer the questions below about how you experienced reading this passage.</div>"
        },
        {
          "type": "html",
          "name": "m2_hear_q",
          "html": "<div class=\"pt-prompt\">Which of the words did you hear in your head?</div>"
        },
        {
          "name": "m2_hear",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "all",
              "text": "I heard all the words in my head"
            },
            {
              "value": "one_side",
              "text": "Only one side of the conversation"
            },
            {
              "value": "none",
              "text": "I didn't hear any words in my head"
            }
          ],
          "showOtherItem": true,
          "otherText": "I only heard some of the words (please specify which)",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "m2_voice_q",
          "html": "<div class=\"pt-prompt\">In whose or what voice did you hear it? (select all that apply)</div>"
        },
        {
          "name": "m2_voice",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "same_general",
              "text": "All in the same general, non-specific voice"
            },
            {
              "value": "own",
              "text": "All in my own voice"
            },
            {
              "value": "each_diff",
              "text": "Each side in a different voice"
            },
            {
              "value": "mom_own",
              "text": "One side in my mom's voice and the other in my own voice"
            },
            {
              "value": "female_other",
              "text": "One side in a general female voice and the other in a general male voice"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "m2_accent_q",
          "html": "<div class=\"pt-prompt\">Accent (select all that apply)</div>"
        },
        {
          "name": "m2_accent",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "similar",
              "text": "Similar to my own accent"
            },
            {
              "value": "each_diff",
              "text": "Each side in a different accent"
            },
            {
              "value": "one_side",
              "text": "Only one side had an accent similar to my own"
            },
            {
              "value": "both_same",
              "text": "Both sides in the same accent"
            }
          ],
          "showNoneItem": true,
          "noneText": "I didn't notice"
        },
        {
          "type": "html",
          "name": "m2_tone_q",
          "html": "<div class=\"pt-prompt\">Emotional tone (select all that apply)</div>"
        },
        {
          "name": "m2_tone",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "each_diff",
              "text": "Each side in a different emotional tone"
            },
            {
              "value": "both_same",
              "text": "Both sides in the same emotional tone"
            }
          ]
        },
        {
          "type": "html",
          "name": "m2_volume_q",
          "html": "<div class=\"pt-prompt\">Volume (select all that apply)</div>"
        },
        {
          "name": "m2_volume",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "each_diff",
              "text": "Each side at a different volume"
            },
            {
              "value": "both_same",
              "text": "Both sides at the same volume"
            }
          ]
        },
        {
          "type": "html",
          "name": "m2_abbr_q",
          "html": "<div class=\"pt-prompt\">How did you read “LOL”?</div>"
        },
        {
          "name": "m2_abbr",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "silent",
              "text": "I understood it without hearing it"
            },
            {
              "value": "letters",
              "text": "As the letters “L”, “O”, “L”"
            },
            {
              "value": "lol",
              "text": "As it is written, “lol”"
            },
            {
              "value": "laughing",
              "text": "As “laughing out loud”"
            },
            {
              "value": "love",
              "text": "As “lots of love”"
            }
          ]
        }
      ]
    },
    {
      "name": "one_stop_qa_silent_reading",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_silent_reading_q",
          "html": "<div class=\"pt-prompt\">Please read the following paragraph silently:<br> Leading water scientists have issued one of the sternest warnings yet about global food supplies, saying that the world’s population may have to switch almost completely to a vegetarian diet by 2050 to avoid catastrophic shortages. Humans derive about 20% of their protein from animal-based products now, but this may need to drop to just 5% to feed the extra two billion people expected to be alive by 2050, according to research by some of the world’s leading water scientists. “There will not be enough water available on current croplands to produce food for the expected nine-billion population in 2050 if we follow current trends and changes towards diets common in western nations,” the report by Malik Falkenmark and colleagues at the Stockholm International Water Institute (SIWI) said.<br><br><br>Now answer the questions below about how you experienced reading this passage.</div>"
        },
        {
          "type": "html",
          "name": "os_hear_q",
          "html": "<div class=\"pt-prompt\">Which of the words did you hear in your head?</div>"
        },
        {
          "name": "os_hear",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "all",
              "text": "I heard all the words in my head"
            },
            {
              "value": "quote",
              "text": "Only the quote (not the rest)"
            },
            {
              "value": "none",
              "text": "I didn't hear any words in my head"
            }
          ],
          "showOtherItem": true,
          "otherText": "I only heard some of the words (please specify which)",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "os_voice_q",
          "html": "<div class=\"pt-prompt\">In whose or what voice did you hear it? (select all that apply)</div>"
        },
        {
          "name": "os_voice",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "own",
              "text": "My own voice"
            },
            {
              "value": "general",
              "text": "A general, non-specific voice"
            },
            {
              "value": "quote_diff",
              "text": "The quote in a different voice than the rest of the text"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "os_accent_q",
          "html": "<div class=\"pt-prompt\">Accent (select all that apply)</div>"
        },
        {
          "name": "os_accent",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "similar",
              "text": "Similar to my own accent"
            },
            {
              "value": "different",
              "text": "Different from my own accent"
            }
          ],
          "showNoneItem": true,
          "noneText": "I didn't notice"
        },
        {
          "type": "html",
          "name": "os_gender_q",
          "html": "<div class=\"pt-prompt\">Gender (select all that apply)</div>"
        },
        {
          "name": "os_gender",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "similar",
              "text": "Similar to my own gender"
            },
            {
              "value": "different",
              "text": "Different from my own gender"
            }
          ],
          "showNoneItem": true,
          "noneText": "I didn't notice"
        },
        {
          "type": "html",
          "name": "os_visual_q",
          "html": "<div class=\"pt-prompt\">Did you picture the scene?</div>"
        },
        {
          "name": "os_visual",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "movie",
              "text": "I saw it like a movie"
            },
            {
              "value": "pictures",
              "text": "I saw it as still pictures"
            }
          ],
          "showNoneItem": true,
          "noneText": "I didn't picture it"
        }
      ]
    },
    {
      "name": "one_stop_qa_q",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_q_q",
          "html": "<div class=\"pt-prompt\">According to Malik Falkenmark’s report, what will happen if the world adopts the current diet trends of western nations?</div>"
        },
        {
          "name": "one_stop_qa_q",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "There will not be sufficient water to grow enough food for everyone"
            },
            {
              "value": "2",
              "text": "By 2050, nine billion people will not have enough drinking water"
            },
            {
              "value": "3",
              "text": "By 2050, animal-based protein consumption will reduce from 20% to 5%"
            },
            {
              "value": "4",
              "text": "Obesity rates around the world will rise"
            }
          ],
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_silent_reading_gender",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_silent_reading_gender_q",
          "html": "<div class=\"pt-prompt\">Please read the following paragraph silently again, but this time try to hear a voice saying the words in your head with a different gender than the first time:<br> Leading water scientists have issued one of the sternest warnings yet about global food supplies, saying that the world’s population may have to switch almost completely to a vegetarian diet by 2050 to avoid catastrophic shortages. Humans derive about 20% of their protein from animal-based products now, but this may need to drop to just 5% to feed the extra two billion people expected to be alive by 2050, according to research by some of the world’s leading water scientists. “There will not be enough water available on current croplands to produce food for the expected nine-billion population in 2050 if we follow current trends and changes towards diets common in western nations,” the report by Malik Falkenmark and colleagues at the Stockholm International Water Institute (SIWI) said.</div>"
        },
        {
          "name": "one_stop_qa_silent_reading_gender",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "It sounded the same as the first time."
            },
            {
              "value": "2",
              "text": "Only the gender was different."
            },
            {
              "value": "3",
              "text": "A different gender \u2014 and other qualities changed too."
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_silent_reading_accent",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_silent_reading_accent_q",
          "html": "<div class=\"pt-prompt\">Please read the following paragraph silently again, but this time try to hear a voice saying the words in your head with a different accent than the first time:<br> Leading water scientists have issued one of the sternest warnings yet about global food supplies, saying that the world’s population may have to switch almost completely to a vegetarian diet by 2050 to avoid catastrophic shortages. Humans derive about 20% of their protein from animal-based products now, but this may need to drop to just 5% to feed the extra two billion people expected to be alive by 2050, according to research by some of the world’s leading water scientists. “There will not be enough water available on current croplands to produce food for the expected nine-billion population in 2050 if we follow current trends and changes towards diets common in western nations,” the report by Malik Falkenmark and colleagues at the Stockholm International Water Institute (SIWI) said.</div>"
        },
        {
          "name": "one_stop_qa_silent_reading_accent",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "It sounded the same as the first time."
            },
            {
              "value": "2",
              "text": "Only the accent was different."
            },
            {
              "value": "3",
              "text": "A different accent \u2014 and other qualities changed too."
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_silent_reading_pitch",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_silent_reading_pitch_q",
          "html": "<div class=\"pt-prompt\">Please read the following paragraph silently again, but this time try to hear a voice saying the words in your head with a lower or higher pitch than the first time:<br> Leading water scientists have issued one of the sternest warnings yet about global food supplies, saying that the world’s population may have to switch almost completely to a vegetarian diet by 2050 to avoid catastrophic shortages. Humans derive about 20% of their protein from animal-based products now, but this may need to drop to just 5% to feed the extra two billion people expected to be alive by 2050, according to research by some of the world’s leading water scientists. “There will not be enough water available on current croplands to produce food for the expected nine-billion population in 2050 if we follow current trends and changes towards diets common in western nations,” the report by Malik Falkenmark and colleagues at the Stockholm International Water Institute (SIWI) said.</div>"
        },
        {
          "name": "one_stop_qa_silent_reading_pitch",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "It sounded the same as the first time."
            },
            {
              "value": "2",
              "text": "Only the pitch was different."
            },
            {
              "value": "3",
              "text": "A different pitch \u2014 and other qualities changed too."
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_silent_reading_speed",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_silent_reading_speed_q",
          "html": "<div class=\"pt-prompt\">Please read the following paragraph silently again, but this time try to hear a voice saying the words in your head faster or slower than the first time:<br> Leading water scientists have issued one of the sternest warnings yet about global food supplies, saying that the world’s population may have to switch almost completely to a vegetarian diet by 2050 to avoid catastrophic shortages. Humans derive about 20% of their protein from animal-based products now, but this may need to drop to just 5% to feed the extra two billion people expected to be alive by 2050, according to research by some of the world’s leading water scientists. “There will not be enough water available on current croplands to produce food for the expected nine-billion population in 2050 if we follow current trends and changes towards diets common in western nations,” the report by Malik Falkenmark and colleagues at the Stockholm International Water Institute (SIWI) said.</div>"
        },
        {
          "name": "one_stop_qa_silent_reading_speed",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "It sounded the same as the first time."
            },
            {
              "value": "2",
              "text": "Only the reading speed was different."
            },
            {
              "value": "3",
              "text": "A different reading speed \u2014 and other qualities changed too."
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_silent_reading_loudness",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_silent_reading_loudness_q",
          "html": "<div class=\"pt-prompt\">Please read the following paragraph silently again, but this time try to hear a voice saying the words in your head louder (like a shout) or quieter (like a whisper) than the first time:<br> Leading water scientists have issued one of the sternest warnings yet about global food supplies, saying that the world’s population may have to switch almost completely to a vegetarian diet by 2050 to avoid catastrophic shortages. Humans derive about 20% of their protein from animal-based products now, but this may need to drop to just 5% to feed the extra two billion people expected to be alive by 2050, according to research by some of the world’s leading water scientists. “There will not be enough water available on current croplands to produce food for the expected nine-billion population in 2050 if we follow current trends and changes towards diets common in western nations,” the report by Malik Falkenmark and colleagues at the Stockholm International Water Institute (SIWI) said.</div>"
        },
        {
          "name": "one_stop_qa_silent_reading_loudness",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "It sounded the same as the first time."
            },
            {
              "value": "2",
              "text": "Only the loudness was different."
            },
            {
              "value": "3",
              "text": "A different loudness \u2014 and other qualities changed too."
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_silent_reading_emotional_tone",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_silent_reading_emotional_tone_q",
          "html": "<div class=\"pt-prompt\">Please read the following paragraph silently again, but this time try to hear a voice saying the words in your head with a different intonation than the first time:<br> Leading water scientists have issued one of the sternest warnings yet about global food supplies, saying that the world’s population may have to switch almost completely to a vegetarian diet by 2050 to avoid catastrophic shortages. Humans derive about 20% of their protein from animal-based products now, but this may need to drop to just 5% to feed the extra two billion people expected to be alive by 2050, according to research by some of the world’s leading water scientists. “There will not be enough water available on current croplands to produce food for the expected nine-billion population in 2050 if we follow current trends and changes towards diets common in western nations,” the report by Malik Falkenmark and colleagues at the Stockholm International Water Institute (SIWI) said.</div>"
        },
        {
          "name": "one_stop_qa_silent_reading_emotional_tone",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "It sounded the same as the first time."
            },
            {
              "value": "2",
              "text": "Only the emotional tone was different."
            },
            {
              "value": "3",
              "text": "A different emotional tone \u2014 and other qualities changed too."
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_silent_reading_friend",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_silent_reading_friend_q",
          "html": "<div class=\"pt-prompt\">Please read the following paragraph silently again, but this time try to hear a voice saying the words in your head similar to a specific close friend or family member of yours:<br> Leading water scientists have issued one of the sternest warnings yet about global food supplies, saying that the world’s population may have to switch almost completely to a vegetarian diet by 2050 to avoid catastrophic shortages. Humans derive about 20% of their protein from animal-based products now, but this may need to drop to just 5% to feed the extra two billion people expected to be alive by 2050, according to research by some of the world’s leading water scientists. “There will not be enough water available on current croplands to produce food for the expected nine-billion population in 2050 if we follow current trends and changes towards diets common in western nations,” the report by Malik Falkenmark and colleagues at the Stockholm International Water Institute (SIWI) said.</div>"
        },
        {
          "name": "one_stop_qa_silent_reading_friend",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "It sounded the same as the first time."
            },
            {
              "value": "2",
              "text": "It sounded like a specific friend or family member reading to me."
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_lips_moving",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_lips_moving_q",
          "html": "<div class=\"pt-prompt\">Please read the following paragraph again, but this time move your lips as if to say the words aloud, but do not make any sound:<br> Leading water scientists have issued one of the sternest warnings yet about global food supplies, saying that the world’s population may have to switch almost completely to a vegetarian diet by 2050 to avoid catastrophic shortages. Humans derive about 20% of their protein from animal-based products now, but this may need to drop to just 5% to feed the extra two billion people expected to be alive by 2050, according to research by some of the world’s leading water scientists. “There will not be enough water available on current croplands to produce food for the expected nine-billion population in 2050 if we follow current trends and changes towards diets common in western nations,” the report by Malik Falkenmark and colleagues at the Stockholm International Water Institute (SIWI) said.<br><br><br>Now answer the questions below about how you experienced reading this passage.</div>"
        },
        {
          "name": "one_stop_qa_lips_moving",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "The same voice as the first time"
            },
            {
              "value": "2",
              "text": "My own voice"
            },
            {
              "value": "3",
              "text": "The same as reading it silently"
            }
          ],
          "showOtherItem": true,
          "otherText": "It felt different from reading the paragraph silently (please specify in what way)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_aloud",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_aloud_q",
          "html": "<div class=\"pt-prompt\">Please read the following paragraph again, but this time read it aloud:<br> Leading water scientists have issued one of the sternest warnings yet about global food supplies, saying that the world’s population may have to switch almost completely to a vegetarian diet by 2050 to avoid catastrophic shortages. Humans derive about 20% of their protein from animal-based products now, but this may need to drop to just 5% to feed the extra two billion people expected to be alive by 2050, according to research by some of the world’s leading water scientists. “There will not be enough water available on current croplands to produce food for the expected nine-billion population in 2050 if we follow current trends and changes towards diets common in western nations,” the report by Malik Falkenmark and colleagues at the Stockholm International Water Institute (SIWI) said.<br><br><br>Now answer the questions below about how you experienced reading this passage.</div>"
        },
        {
          "name": "one_stop_qa_aloud",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "I did not hear a voice in my head."
            },
            {
              "value": "2",
              "text": "The same voice as the first time"
            },
            {
              "value": "3",
              "text": "My own voice"
            },
            {
              "value": "4",
              "text": "The same as reading it silently"
            },
            {
              "value": "5",
              "text": "The same as reading it silently with lips moving"
            }
          ],
          "showOtherItem": true,
          "otherText": "It felt different from reading the paragraph silently (please specify in what way)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_listening",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_listening_q",
          "html": "<div class=\"pt-media\"><audio controls preload=\"auto\" src=\"stimuli/media/Food-Shortages-Could-Force-World-into-Vegetarianism_p1.wav\"></audio></div><div class=\"pt-prompt\">Please play the sound of Amy reading the paragraph aloud and follow the text while you listen (read silently with her).<br> Leading water scientists have issued one of the sternest warnings yet about global food supplies, saying that the world’s population may have to switch almost completely to a vegetarian diet by 2050 to avoid catastrophic shortages. Humans derive about 20% of their protein from animal-based products now, but this may need to drop to just 5% to feed the extra two billion people expected to be alive by 2050, according to research by some of the world’s leading water scientists. “There will not be enough water available on current croplands to produce food for the expected nine-billion population in 2050 if we follow current trends and changes towards diets common in western nations,” the report by Malik Falkenmark and colleagues at the Stockholm International Water Institute (SIWI) said.<br><br><br>Now answer the questions below about how you experienced reading this passage.</div>"
        },
        {
          "type": "html",
          "name": "l1_heard_q",
          "html": "<div class=\"pt-prompt\">While listening, did you hear a voice in your head?</div>"
        },
        {
          "name": "l1_heard",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "no",
              "text": "No, I did not hear a voice in my head while listening"
            }
          ],
          "showOtherItem": true,
          "otherText": "Yes, I heard a voice in my head (please specify)",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "l1_overall_q",
          "html": "<div class=\"pt-prompt\">Compared with the voice you heard when reading silently, Amy's voice was…</div>"
        },
        {
          "name": "l1_overall",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "similar",
              "text": "Similar"
            },
            {
              "value": "different",
              "text": "Different"
            }
          ]
        },
        {
          "type": "html",
          "name": "l1_gender_q",
          "html": "<div class=\"pt-prompt\">Gender — your silent-reading voice vs Amy's:</div>"
        },
        {
          "name": "l1_gender",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "same",
              "text": "Same gender"
            },
            {
              "value": "different",
              "text": "Different gender"
            }
          ]
        },
        {
          "type": "html",
          "name": "l1_accent_q",
          "html": "<div class=\"pt-prompt\">Accent — your silent-reading voice vs Amy's:</div>"
        },
        {
          "name": "l1_accent",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "same",
              "text": "Same accent"
            },
            {
              "value": "different",
              "text": "Different accent"
            }
          ]
        },
        {
          "type": "html",
          "name": "l1_speed_q",
          "html": "<div class=\"pt-prompt\">Reading speed — your silent-reading voice vs Amy's:</div>"
        },
        {
          "name": "l1_speed",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "same",
              "text": "Same speed"
            },
            {
              "value": "different",
              "text": "Different speed"
            }
          ]
        },
        {
          "type": "html",
          "name": "l1_pitch_q",
          "html": "<div class=\"pt-prompt\">Pitch — your silent-reading voice vs Amy's:</div>"
        },
        {
          "name": "l1_pitch",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "same",
              "text": "Similar pitch"
            },
            {
              "value": "different",
              "text": "Different pitch"
            }
          ]
        },
        {
          "type": "html",
          "name": "l1_emotion_q",
          "html": "<div class=\"pt-prompt\">Emotional tone — your silent-reading voice vs Amy's:</div>"
        },
        {
          "name": "l1_emotion",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "same",
              "text": "Similar emotional tone"
            },
            {
              "value": "different",
              "text": "Different emotional tone"
            }
          ]
        }
      ]
    },
    {
      "name": "one_stop_qa_2",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_2_q",
          "html": "<div class=\"pt-prompt\">Please read the following paragraph silently. Try to hear as if Amy is reading the words to you.<br> “There will be just enough water if the proportion of animal-based foods is limited to 5% of total calories and considerable regional water deficits can be met by a reliable system of food trade.” Dire warnings of water scarcity limiting food production come as Oxfam and the UN prepare for a possible second global food crisis in five years. Prices for staples such as corn and wheat have risen nearly 50% on international markets since June, triggered by severe droughts in the US and Russia, and weak monsoon rains in Asia. More than 18 million people are already facing serious food shortages across the Sahel. Oxfam has forecast that the price spike will have a devastating impact in developing countries that rely heavily on food imports, including parts of Latin America, North Africa and the Middle East. Food shortages in 2008 led to civil unrest in 28 countries.<br><br><br>Now answer the questions below about how you experienced reading this passage.</div>"
        },
        {
          "type": "html",
          "name": "o2_voice_q",
          "html": "<div class=\"pt-prompt\">In whose or what voice did you hear it?</div>"
        },
        {
          "name": "o2_voice",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "same",
              "text": "The same way as the first time I read the passage"
            },
            {
              "value": "own",
              "text": "In my own voice"
            },
            {
              "value": "amy",
              "text": "As if Amy was reading it to me"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "o2_accent_q",
          "html": "<div class=\"pt-prompt\">The accent you heard was…</div>"
        },
        {
          "name": "o2_accent",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "mine",
              "text": "Similar to my own accent"
            },
            {
              "value": "amy",
              "text": "Similar to Amy's accent"
            },
            {
              "value": "neither",
              "text": "Neither mine nor Amy's"
            }
          ]
        },
        {
          "type": "html",
          "name": "o2_gender_q",
          "html": "<div class=\"pt-prompt\">The gender you heard was…</div>"
        },
        {
          "name": "o2_gender",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "mine",
              "text": "Similar to my own gender"
            },
            {
              "value": "amy",
              "text": "Similar to Amy's gender"
            },
            {
              "value": "other",
              "text": "Different from both Amy's and mine"
            }
          ]
        },
        {
          "type": "html",
          "name": "o2_loudness_q",
          "html": "<div class=\"pt-prompt\">Loudness compared with Amy's voice:</div>"
        },
        {
          "name": "o2_loudness",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "same",
              "text": "The same as Amy's"
            },
            {
              "value": "different",
              "text": "Different from Amy's"
            }
          ]
        },
        {
          "type": "html",
          "name": "o2_speed_q",
          "html": "<div class=\"pt-prompt\">Reading speed compared with Amy's voice:</div>"
        },
        {
          "name": "o2_speed",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "same",
              "text": "The same as Amy's"
            },
            {
              "value": "different",
              "text": "Different from Amy's"
            }
          ]
        },
        {
          "type": "html",
          "name": "o2_pitch_q",
          "html": "<div class=\"pt-prompt\">The pitch you heard was…</div>"
        },
        {
          "name": "o2_pitch",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "amy",
              "text": "Similar to Amy's pitch"
            },
            {
              "value": "mine",
              "text": "Similar to my own pitch"
            },
            {
              "value": "other",
              "text": "Different from both"
            }
          ]
        },
        {
          "type": "html",
          "name": "o2_emotion_q",
          "html": "<div class=\"pt-prompt\">Emotional tone compared with Amy's voice:</div>"
        },
        {
          "name": "o2_emotion",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "same",
              "text": "The same as Amy's"
            },
            {
              "value": "different",
              "text": "Different from Amy's"
            }
          ]
        }
      ]
    },
    {
      "name": "one_stop_qa_2_listening",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_2_listening_q",
          "html": "<div class=\"pt-media\"><audio controls preload=\"auto\" src=\"stimuli/media/Food-Shortages-Could-Force-World-into-Vegetarianism_p2.wav\"></audio></div><div class=\"pt-prompt\">Please play the sound of Amy reading the paragraph aloud and follow the text while you listen (read silently with her).<br> “There will be just enough water if the proportion of animal-based foods is limited to 5% of total calories and considerable regional water deficits can be met by a reliable system of food trade.” Dire warnings of water scarcity limiting food production come as Oxfam and the UN prepare for a possible second global food crisis in five years. Prices for staples such as corn and wheat have risen nearly 50% on international markets since June, triggered by severe droughts in the US and Russia, and weak monsoon rains in Asia. More than 18 million people are already facing serious food shortages across the Sahel. Oxfam has forecast that the price spike will have a devastating impact in developing countries that rely heavily on food imports, including parts of Latin America, North Africa and the Middle East. Food shortages in 2008 led to civil unrest in 28 countries.<br><br><br>Now answer the questions below about how you experienced reading this passage.</div>"
        },
        {
          "type": "html",
          "name": "l2_heard_q",
          "html": "<div class=\"pt-prompt\">While listening, did you hear a voice in your head?</div>"
        },
        {
          "name": "l2_heard",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "no",
              "text": "No, I did not hear a voice in my head while listening"
            }
          ],
          "showOtherItem": true,
          "otherText": "Yes, I heard a voice in my head (please specify)",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "l2_overall_q",
          "html": "<div class=\"pt-prompt\">Compared with the voice you heard when reading silently, Amy's voice was…</div>"
        },
        {
          "name": "l2_overall",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "similar",
              "text": "Similar"
            },
            {
              "value": "different",
              "text": "Different"
            }
          ]
        },
        {
          "type": "html",
          "name": "l2_gender_q",
          "html": "<div class=\"pt-prompt\">Gender — your silent-reading voice vs Amy's:</div>"
        },
        {
          "name": "l2_gender",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "same",
              "text": "Same gender"
            },
            {
              "value": "different",
              "text": "Different gender"
            }
          ]
        },
        {
          "type": "html",
          "name": "l2_accent_q",
          "html": "<div class=\"pt-prompt\">Accent — your silent-reading voice vs Amy's:</div>"
        },
        {
          "name": "l2_accent",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "same",
              "text": "Same accent"
            },
            {
              "value": "different",
              "text": "Different accent"
            }
          ]
        },
        {
          "type": "html",
          "name": "l2_speed_q",
          "html": "<div class=\"pt-prompt\">Reading speed — your silent-reading voice vs Amy's:</div>"
        },
        {
          "name": "l2_speed",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "same",
              "text": "Same speed"
            },
            {
              "value": "different",
              "text": "Different speed"
            }
          ]
        },
        {
          "type": "html",
          "name": "l2_pitch_q",
          "html": "<div class=\"pt-prompt\">Pitch — your silent-reading voice vs Amy's:</div>"
        },
        {
          "name": "l2_pitch",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "same",
              "text": "Similar pitch"
            },
            {
              "value": "different",
              "text": "Different pitch"
            }
          ]
        },
        {
          "type": "html",
          "name": "l2_emotion_q",
          "html": "<div class=\"pt-prompt\">Emotional tone — your silent-reading voice vs Amy's:</div>"
        },
        {
          "name": "l2_emotion",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "same",
              "text": "Similar emotional tone"
            },
            {
              "value": "different",
              "text": "Different emotional tone"
            }
          ]
        }
      ]
    },
    {
      "name": "one_stop_qa_2_q",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_2_q_q",
          "html": "<div class=\"pt-prompt\">Which factor led to the increase in the price of corn and wheat?</div>"
        },
        {
          "name": "one_stop_qa_2_q",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Unfavorable weather conditions in different locations around the globe"
            },
            {
              "value": "2",
              "text": "Instability of the international financial markets"
            },
            {
              "value": "3",
              "text": "Warnings of water scarcity by Oxfam and the UN"
            },
            {
              "value": "4",
              "text": "Global warming"
            }
          ],
          "isRequired": true
        }
      ]
    }
  ]
};
  return [ IVQ.makeSurvey(survey_json, { part: "part4" }) ];
};
