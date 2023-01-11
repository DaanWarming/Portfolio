import ReadingListNavBar from "../../pages/ReadingList/ReadingListNavBar";

// this are the article components from 2023

// export function TheStoryOfTFT() {
//   return (
//     <>
//       <ReadingListNavBar />
//       <main className="center-content">
        
//       </main>
//     </>
//   )
// }

export function idealenMooiResultatenBeter() {
  return (
    <>
      <ReadingListNavBar />
      <main className="center-content">
        
      </main>
    </>
  )
}

export function SortByControversial() {
  return (
    <>
      <ReadingListNavBar />
      <main className="center-content">
        <div className="super-content-wrapper">
          <div className="notion-header page">
            <div className="notion-header__cover no-cover" />
            <div className="notion-header__content no-cover has-icon max-width">
              <div className="notion-header__title-wrapper">
                <div className="notion-header__icon-wrapper no-cover has-icon">
                </div>
                <h1 className="notion-header__title">Sort By Controversial</h1>
              </div>
            </div>
          </div>
          <div className="super-content max-width">
            <article
              id="block-reading-list-december-2022-sort-by-controversial"
              className="notion-root"
            >
              <div className="notion-page__properties">
                <div
                  className="notion-page__property"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "160px 1fr",
                    gap: 8,
                    minHeight: 36,
                  }}
                >
                  <div className="notion-page__property-name">
                    <span>Original URL</span>
                  </div>
                  <div className="notion-property notion-property__url property-undefined">
                    <span className="notion-semantic-string">
                      <span>
                        <a
                          href="https://slatestarcodex.com/2018/10/30/sort-by-controversial/"
                          className="notion-link link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://slatestarcodex.com/2018/10/30/sort-by-controversial/
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
                <div id="block-root-divider" className="notion-divider" />
              </div>
              <div
                id="block-001f46e9266944a1bf6ac27bb601c995"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      <em>[Epistemic status: fiction]</em>
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-7ecca55931b247fc9e6d12cb6ba18194"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      Thanks for letting me put my story on your blog.
                      Mainstream media is crap and no one would have believed me
                      anyway.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-fa318aaeeb7943fea233694aeaf92e82"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      This starts in September 2017. I was working for a small
                      online ad startup. You know the ads on Facebook and
                      Twitter? We tell companies how to get them the most
                      clicks. This startup – I won’t tell you the name – was
                      going to add deep learning, because investors will throw
                      money at anything that uses the words “deep learning”. We
                      train a network to predict how many upvotes something will
                      get on Reddit. Then we ask it how many likes different ads
                      would get. Then we use whatever ad would get the most
                      likes.{" "}
                    </span>
                    <span>
                      <a
                        href="https://minimaxir.com/2017/06/reddit-deep-learning/"
                        className="notion-link link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        This guy
                      </a>
                    </span>
                    <span>
                      {" "}
                      (who is not me) explains it better. Why Reddit? Because
                      the upvotes and downvotes are simpler than all the
                      different Facebook reacts, plus the subreddits allow
                      demographic targeting, plus there’s{" "}
                    </span>
                    <span>
                      <a
                        href="https://www.reddit.com/r/bigquery/comments/3cej2b/17_billion_reddit_comments_loaded_on_bigquery/"
                        className="notion-link link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        an archive of 1.7 billion Reddit comments
                      </a>
                    </span>
                    <span>
                      {" "}
                      you can download for training data. We trained a network
                      to predict upvotes of Reddit posts based on their titles.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-0f4442e5bb804288bd8bff38ef1dc77c"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      Any predictive network doubles as a generative network. If
                      you teach a neural net to recognize dogs, you can run it
                      in reverse to get dog pictures. If you train a network to
                      predict Reddit upvotes, you can run it in reverse to
                      generate titles it predicts will be highly upvoted. We
                      tried this and it was pretty funny. I don’t remember the
                      exact wording, but for /r/politics it was something like
                      “Donald Trump is no longer the president. All transgender
                      people are the president.” For r/technology it was about
                      Elon Musk saving Net Neutrality. You can also generate
                      titles that will get maximum downvotes, but this is
                      boring: it will just say things that sound like spam about
                      penis pills.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-f72b13c954bb41a68368168299f9653c"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      Reddit has a feature where you can sort posts by
                      controversial. You can see the algorithm{" "}
                    </span>
                    <span>
                      <a
                        href="https://github.com/reddit-archive/reddit/blob/master/r2/r2/lib/db/_sorts.pyx"
                        className="notion-link link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        here
                      </a>
                    </span>
                    <span>
                      , but tl;dr it multiplies magnitude of total votes
                      (upvotes + downvotes) by balance (upvote:downvote ratio or
                      vice versa, whichever is smaller) to highlight posts that
                      provoke disagreement. Controversy sells, so we trained our
                      network to predict this too. The project went to this
                      new-ish Indian woman with a long name who went by Shiri,
                      and she couldn’t get it to work, so our boss Brad sent me
                      to help. Shiri had tested the network on the big 1.7
                      billion comment archive, and it had produced
                      controversial-sounding hypothethical scenarios about US
                      politics. So far so good.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-6fcb646aec1f4e23bb4ee907756ea810"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      The Japanese tested their bioweapons on Chinese prisoners.
                      The Tuskegee Institute tested syphilis on
                      African-Americans. We were either nicer or dumber than
                      they were, because we tested Shiri’s Scissor on ourselves.
                      We had a private internal subreddit where we discussed
                      company business, because Brad wanted all of us to get
                      familiar with the platform. Shiri’s problem was that she’d
                      been testing the controversy-network on our subreddit, and
                      it would just spit out vacuously true or vacuously false
                      statements. No controversy, no room for disagreement. The
                      statement we were looking at that day was about a design
                      choice in our code. I won’t tell you the specifics, but
                      imagine you took every bad and wrong decision decision in
                      the world, hard-coded them in the ugliest possible way,
                      and then handed it to the end user with a big middle
                      finger. Shiri’s Scissor spit out, as maximally
                      controversial, the statement that we should design our
                      product that way. We’d spent ten minutes arguing about
                      exactly where the bug was, when Shiri said something about
                      how she didn’t understand why the program was generating
                      obviously true statements.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-ecb6ef64bc2145fabc801f7f63fd2b75"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      Shiri’s English wasn’t great, so I thought this was a
                      communication problem. I corrected her. The program was
                      spitting out obviously false statements. She stuck to her
                      guns. I still thought she was confused. I walked her
                      through the meanings of the English words “true” and
                      “false”. She looked offended. I tried to confirm. She
                      thought this abysmal programming decision, this plan of
                      combining every bad design technique together and making
                      it impossible to ever fix, was the right way to build our
                      codebase? She said it was. Worse, she was confused I{" "}
                    </span>
                    <span>
                      <em>didn’t</em>
                    </span>
                    <span>
                      {" "}
                      think so. She thought this was more or less what we were
                      already doing; it wasn’t. She thought that moving away
                      from this would take a total rewrite and make the code
                      much worse.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-3edeffd26c6744f9904170136eced3a9"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      At this point I was doubting my sanity, so we went next
                      door to Blake and David, who were senior coders in our
                      company and usually voices of reason. They were talking
                      about their own problem, but I interrupted them and gave
                      them the Scissor statement. Blake gave the reasonable
                      response – why are you bothering me with this stupid wrong
                      garbage? But David had the same confusion Shiri did and
                      started arguing that the idea made total sense. The four
                      of us started fighting. I still was sure Shiri and David
                      just misunderstood the question, even though David was a
                      native English-speaker and the question was crystal-clear.
                      Meanwhile David was feeling more and more condescended to,
                      kept protesting he wasn’t misunderstanding anything, that
                      Blake and I were just crappy programmers who couldn’t make
                      the most basic architecture decisions. He kept insisting
                      the same thing Shiri had, that the Scissor statement had
                      already been the plan and any attempt to go in a different
                      direction would screw everything up. It got so bad that we
                      decided to go to Brad for clarification.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-5e30fc1f19844f12af3d17dc8f621cdd"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      Brad was our founder. Don’t trust the newspapers – not
                      every tech entrepreneur is a greedy antisocial philistine.
                      But everyone in advertising is. Brad definitely was. He
                      was an abrasive amoral son of a bitch. But he was good at
                      charming investors, and he could code, which is more than
                      some bosses. He looked pissed to have the whole coding
                      team come into his office unannounced, but he heard us
                      out.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-f813d6e0ce254fe8bf333f6c9dc164e4"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      David tried to explain the issue, but he misrepresented
                      almost every part of it. I couldn’t believe he was lying
                      just to look better to Brad. I cut him off. He told me not
                      to interrupt him. Blake said if he wasn’t lying we
                      wouldn’t have to interrupt to correct him, it degenerated
                      from there. Somehow in the middle of all of this, Brad
                      figured out what we were talking about and he cut us all
                      off. “That’s the stupidest thing I ever heard.” He
                      confirmed it wasn’t the original plan, it was contrary to
                      the original plan, and it was contrary to every rule of
                      good programming and good business. David and Shiri, who
                      were bad losers, accused Blake and me of “poisoning” Brad.
                      David said that of course Brad would side with us. Brad
                      had liked us better from the beginning. We’d racked up
                      cushy project after cushy project while he and Shiri had
                      gotten the dregs. Brad told him he was a moron and should
                      get back to work. He didn’t.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-48aa214531124e42be161a8778dc48f6"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      This part of the story ends at 8 PM with Brad firing David
                      and Shiri for a combination of gross incompetence, gross
                      insubordination, and being terrible human beings. With him
                      giving a long speech on how he’d taken a chance on hiring
                      David and Shiri, even though he knew from the beginning
                      that they were unqualified charity cases, and at every
                      turn they’d repaid his kindness with laziness and
                      sabotage. With him calling them a drain on the company and
                      implied they might be working for our competitors. With
                      them calling him an abusive boss, saying the whole company
                      was a scam to trick vulnerable employees into working
                      themselves ragged for Brad’s personal enrichment, and with
                      them accusing us two – me and Blake – of being in on it
                      with Brad.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-3b7cd84514604dd7b065d827bf8edada"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      That was 8 PM. We’d been standing in Brad’s office
                      fighting for five hours. At 8:01, after David and Shiri
                      had stormed out, we all looked at each other and thought –
                      holy shit, the controversial filter works.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-f584b8f6f9da4749bcbb19a0de993d23"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      I want to repeat that. At no time in our five hours of
                      arguing did this occur to us. We were too focused on the
                      issue at hand, the Scissor statement itself. We didn’t
                      have the perspective to step back and think about how all
                      this controversy came from a statement designed to be
                      maximally controversial. But at 8:01, when the argument
                      was over and we had won, we stepped back and thought –
                      holy shit.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-72069b74381f4c48bd24d201319251e7"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      We were too tired to think much about it that evening, but
                      the next day we – Brad and the two remaining members of
                      the coding team – had a meeting. We talked about what we
                      had. Blake gave it its name: Shiri’s Scissor. In some dead
                      language, scissor shares a root with schism. A scissor is
                      a schism-er, a schism-creator. And that was what we had.
                      We were going to pivot from online advertising to
                      superweapons. We would call the Pentagon. Tell them we had
                      a program that could make people hate each other. Was this
                      ethical? We were in online ads; we would sell our
                      grandmothers to Somali slavers if we thought it would get
                      us clicks. That horse had left the barn a long time ago.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-ce0865c97613471f99c177bec91eaeb6"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      It’s hard to just call up the Pentagon and tell them you
                      have a superweapon. Even in Silicon Valley, they don’t
                      believe you right away. But Brad called in favors from his
                      friends, and about a week after David and Shiri got fired,
                      we had a colonel from DARPA standing in the meeting room,
                      asking what the hell we thought was so important.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-6753077b7c944ddb97bfd7a416e1a925"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      Now we had a problem. We couldn’t show the Colonel the
                      Scissor statement that had gotten Dave and Shiri fired. He
                      wasn’t in our company; he wasn’t even in ad tech; it would
                      seem boring to him. We didn’t want to generate a new
                      Scissor statement for the Pentagon. Even Brad could figure
                      out that having the US military descend into civil war
                      would be bad for clicks. Finally we settled on a plan. We
                      explained the concept of Reddit to the Colonel. And then
                      we asked him which community he wanted us to tear apart as
                      a demonstration.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-d605223e5a77401ab01b8c5e7d86f692"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      He thought for a second, then said “Mozambique”.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-5fa8915eae7d455196aae748ac9f34d2"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      We had underestimated the culture gap here. When we asked
                      the Colonel to choose a community to be a Scissor victim,
                      we were expecting “tabletop wargamers” or “My Little Pony
                      fans”. But this was not how colonels at DARPA thought
                      about the world. He said “Mozambique”. I started
                      explaining to him that this wasn’t really how Reddit
                      worked, it needed to be a group with its own subreddit.
                      Brad interrupted me, said that Mozambique{" "}
                    </span>
                    <span>
                      <a
                        href="https://www.reddit.com/r/Mozambique/"
                        className="notion-link link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        had a subreddit
                      </a>
                    </span>
                    <span>.</span>
                  </span>
                </p>
              </div>
              <div
                id="block-6ce56e4f74a04eda8ed580d894d4e5bc"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      I could see the wheels turning in Brad’s eyes. One wheel
                      was saying “this guy is already skeptical, if we look weak
                      in front of him he’ll just write us off completely”. The
                      other wheel was calculating how many clicks Mozambique
                      produced. Mene mene tekel upharsin. “Yeah,” he said.
                      “Their subreddit is fine. We can do Mozambique.”
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-9b9b5db017454856a837fdffdb51644f"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      The Colonel gave us his business card and left. Blake and
                      I were stuck running Shiri’s Scissor on the Mozambique
                      subreddit. I know, ethics, but like I said, online ads
                      business, horse, barn door. The only decency we allowed
                      ourselves was to choose the network’s tenth pick – we
                      didn’t need to destroy everything, just give a
                      demonstration. We got a statement accusing the Prime
                      Minister of disrespecting Islam in a certain way – again,
                      I won’t be specific. In the absence of any better method,
                      we PMed the admins of the Mozambique subreddit asking them
                      what they thought. I don’t remember what we said,
                      something about being an American political science
                      student learning about Mozambique culture, and could they
                      ask some friends what would happen if the Prime Minister
                      did that specific thing, and then report back to us?
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-527b69f0c9714bf7ad0585e2514ad8d4"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      We spent most of a week working on our project to
                      undermine Mozambique. Then we got the news. David and
                      Shiri were suing the company for unfair dismissal and
                      racial discrimination. Brad and Blake and I were white.
                      Shiri was an Indian woman, and David was Jewish. The case
                      should have been laughed out of court – who ever heard of
                      an anti-Semitic Silicon Valley startup? – except that all
                      the documentation showed there was no reason to fire David
                      and Shiri. Their work looked good on paper. They’d always
                      gotten good performance reviews. The company was doing
                      fine – it had even placed ads for more programmers a few
                      weeks before.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-6f11da9d7789454e8ec7ab27de9fdd27"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      David and Shiri knew why they’d been fired. But it didn’t
                      matter to them. They were so blinded with hatred for our
                      company, so caught in the grip of the Scissor statement,
                      that they would tell any lie necessary to destroy it. We
                      were caught in a bind. We couldn’t admit the existence of
                      Shiri’s Scissor, because we were trying to sell it to the
                      Pentagon as a secret weapon, and also, publicly admitting
                      to trying to destroy Mozambique would have been bad PR.
                      But the court was demanding records about what our company
                      had been doing just before and just after the dismissal. A
                      real defense contractor could probably have gotten the
                      Pentagon to write a letter saying our research was
                      classified. But the Pentagon still didn’t believe us. The
                      Colonel was humoring us, nothing more. We were stuck.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-a05af8a33c094356922fdc4661ab4cf3"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      I don’t know how we would have dealt with the legal
                      problems, because what actually happened was Brad went to
                      David’s house and tried to beat him up. You’re going to
                      think this was crazy, but you have to understand that
                      David had always been annoying to work with, and that
                      during the argument in Brad’s office he had crossed so
                      many lines that, if ever there was a person who deserved
                      physical violence, it was him. Suing the company was just
                      the last straw. I’m not going to judge Brad’s actions
                      after he’d spent months cleaning up after David’s messes,
                      paying him good money, and then David betrayed him at the
                      end. But anyhow, that was it for our company. Brad got
                      arrested. There was nobody else to pay the bills and keep
                      the lights on. Blake and I were coders and had no idea how
                      to run the business side of things. We handed in our
                      resignations – not literally, Brad was in jail – and that
                      was the end of Name Withheld Online Ad Company, Inc.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-2627acbc6a2f456d89b2fbed283b2e24"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      We got off easy. That’s the takeaway I want to give here.
                      We were unreasonably overwhelmingly lucky. If Shiri and I
                      had started out by arguing about one of the US statements,
                      we could have destroyed the country. If a giant like
                      Google had developed Shiri’s Scissor, it would have
                      destroyed Google. If the Scissor statement we generated
                      hadn’t just been about a very specific piece of
                      advertising software – if it had been about the tech
                      industry in general, or business in general – we could
                      have destroyed the economy.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-ea4f736ea8454f2f9a10d0446d9f5490"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      As it was, we just destroyed our company and maybe a few
                      of our closest competitors. If you look up internal
                      publications from the online advertising industry around
                      fall 2017, you will find some really weird stuff.{" "}
                    </span>
                    <span>
                      <a
                        href="http://www.latimes.com/local/lanow/la-jaffer-arrest-20171022-story.html"
                        className="notion-link link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        That story about
                      </a>
                    </span>
                    <span>
                      {" "}
                      the online ads CEO getting arrested for murder, child
                      abuse, attacking a cop, and three or four other things,
                      and then later it was all found to be{" "}
                    </span>
                    <span>
                      <a
                        href="https://www.thewrap.com/tech-child-rape-vungle-zain-jaffer/"
                        className="notion-link link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        false accusations
                      </a>
                    </span>
                    <span>
                      {" "}
                      related to some ill-explained mental disorder – that’s the
                      tip of the iceberg. I don’t have a good explanation for
                      exactly how the Scissor statement spread or why it didn’t
                      spread further, but I bet if I looked into it too much,
                      black helicopters would start hovering over my house. And
                      that’s all I’m going to say about that.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-820de2536caf4ab29fb3514eec1f3b85"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      As for me, I quit the whole industry. I picked up a job in
                      a more established company using ML for voice recognition,
                      and tried not to think about it too much. I still got
                      angry whenever I thought about the software design issue
                      the Scissor had brought up. Once I saw someone who looked
                      like Shiri at a cafe and I went over intending to give her
                      a piece of my mind. It wasn’t her, so I didn’t end up in
                      jail with Brad. I checked the news from Mozambique every
                      so often, and it was quiet for a few months,{" "}
                    </span>
                    <span>
                      <a
                        href="https://mg.co.za/article/2018-06-22-00-mozambiques-mysterious-insurgency"
                        className="notion-link link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        and then it wasn’t
                      </a>
                    </span>
                    <span>
                      . I still don’t know if we had anything to do with that.
                      Africa just has a lot of conflicts, and if you wait long
                      enough, maybe something will happen. The colonel never
                      tried to get in touch with me. I don’t think he ever took
                      us seriously. Maybe he didn’t even check the news from
                      Mozambique. Maybe he saw it and figured it was a
                      coincidence. Maybe he tried calling our company, got a
                      message saying the phone was out of service, and didn’t
                      think it was worth pursuing. But as time went on and the
                      conflict there didn’t get any worse, I hoped the Shiri’s
                      Scissor part of my life was drawing to a close.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-5683774b978d4c97819291ba3584e821"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      Then came the Kavanaugh hearings. Something about them
                      gave me a sense of deja vu. The week of his testimony, I
                      figured it out.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-6e65864b12ce4a529c22d7e2a42eb6e5"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      Shiri had told me that when she ran the Scissor on the
                      site in general, she’d just gotten some appropriate
                      controversial US politics scenarios. She had shown me two
                      or three of them as examples. One of them had been very
                      specifically about this situation. A Republican Supreme
                      Court nominee accused of committing sexual assault as a
                      teenager.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-ac98b4f65f8541d3a078e63978626729"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      This made me freak out. Had somebody gotten hold of the
                      Scissor and started using it on the US? Had that Pentagon
                      colonel been paying more attention than he let on? But why
                      would the Pentagon be trying to divide America? Had some
                      enemy stolen it? I get the{" "}
                    </span>
                    <span>
                      <em>New York Times</em>
                    </span>
                    <span>
                      , obviously Putin was my first thought here. But how would
                      Putin get Shiri’s Scissor? Was I remembering wrong? I
                      couldn’t get it out of my head. I hadn’t kept the list
                      Shiri had given me, but I had enough of the Scissor
                      codebase to rebuild the program over a few sleepless
                      nights. Then I bought a big blob of compute from Amazon
                      Web Services and threw it at the Reddit comment archive.
                      It took three days and a five-digit sum of money, but I
                      rebuilt the list Shiri must have had. Kavanaugh was in
                      there, just as I remembered.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-7cf968fd36b44c01ae20c9afcb7e6e1e"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      <em>But so was Colin Kaepernick</em>
                    </span>
                    <span>.</span>
                  </span>
                </p>
              </div>
              <div
                id="block-8d0f0b28881a46ceaa5afd838e8e9d00"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      You’ve heard of him. He was the football player who
                      refused to stand for the national anthem. If I already
                      knew the Scissor predicted one controversy, why was I so
                      shocked to learn it predicted another? Because Kaepernick
                      started kneeling in 2016. We didn’t build the Scissor
                      until 2017. Putin hadn’t gotten it from us. Someone had
                      beaten us to it.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-daa3682cac3c4e56bbb2a8bcebfcbd37"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      Of the Scissor’s predicted top hundred most controversial
                      statements, Kavanaugh was #58 and Kaepernick was #42. #86
                      was the Ground Zero Mosque. #89 was that baker who
                      wouldn’t make a cake for a gay wedding. The match isn’t
                      perfect, but #99 vaguely looked like the Elian Gonzalez
                      case from 2000. That’s five out of a hundred. Is that what
                      would happen by chance? It’s a big country, and lots of
                      things happen here, and if a Scissor statement came up in
                      the normal course of events it would get magnified to the
                      national stage. But some of these were too specific. If it
                      was coincidence, I would expect many more near matches
                      than perfect matches. I found only two. The pattern of
                      Scissor statements looked more like someone had arranged
                      them to be perfect fits.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-118efa64854943d992dc0c43fdcfdbdc"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      The earliest perfect fit was the Ground Zero Mosque in
                      2009. Could Putin have had a Scissor-like program in 2009?
                      I say no way. This will sound weird to you if you’re not
                      in the industry. Why couldn’t a national government have
                      been eight years ahead of an online advertising company?
                      All I can say is: machine learning moves faster than that.
                      Russia couldn’t hide a machine learning program that put
                      it eight years ahead of the US. Even the Pentagon couldn’t
                      hide a program that put it eight years ahead of industry.
                      The NSA is thirty years ahead of industry in cryptography
                      and everyone knows it.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-67641d163da541519076a203e1aabdcf"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      But then who was generating Scissor statements in 2009? I
                      have no idea. And you know what? I can’t bring myself to
                      care.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-b3e0e6ad8086414ca442f1670d883d13"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      If you just read a Scissor statement off a list, it’s
                      harmless. It just seems like a trivially true or trivially
                      false thing. It doesn’t activate until you start
                      discussing it with somebody. At first you just think
                      they’re an imbecile. Then they call you an imbecile, and
                      you want to defend yourself. Crescit eundo. You notice all
                      the little ways they’re lying to you and themselves and
                      their audience every time they open their mouth to defend
                      their imbecilic opinion. Then you notice how all the lies
                      are connected, that in order to keep getting the little
                      things like the Scissor statement wrong, they have to drag
                      in everything else. Eventually even that doesn’t work,
                      they’ve just got to make everybody hate you so that nobody
                      will even listen to your argument no matter how obviously
                      true it is. Finally, they don’t care about the Scissor
                      statement anymore. They’ve just dug themselves so deep
                      basing their whole existence around hating you and wanting
                      you to fail that they can’t walk it back. You’ve got to
                      prove them wrong, not because you care about the Scissor
                      statement either, but because otherwise they’ll do
                      anything to poison people against you, make it impossible
                      for them to even understand the argument for why you
                      deserve to exist. You know this is true. Your mind becomes
                      a constant loop of arguments you can use to defend
                      yourself, and rehearsals of arguments for why their
                      attacks are cruel and unfair, and the one burning
                      question: how can you thwart them? How can you convince
                      people not to listen to them, before they find those
                      people and exploit their biases and turn them against you?
                      How can you combat the superficial arguments they’re
                      deploying, before otherwise good people get convinced, so
                      convinced their mind will be made up and they can never be
                      unconvinced again?{" "}
                    </span>
                    <span>
                      <em>How can you keep yourself safe?</em>
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-4b16c4157b4748feafd2b8bd823de9f4"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      Shiri read two or three sample Scissor statements to me.
                      She didn’t say if she agreed with them or not. I didn’t
                      tell her if I agreed with them or not. They were harmless.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-c358bfd0c9694234948f87206a46eff4"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      I don’t hear voices in a crazy way. But sometimes I talk
                      to myself. Sometimes I do both halves of the conversation.
                      Sometimes I imagine one of them is a different person. I
                      had a tough breakup a year ago. Sometimes the other voice
                      in my head is my ex-girlfriend’s voice. I know how she
                      thinks and I always know what she would say about
                      everything. So sometimes I hold conversations with her,
                      even though she isn’t there, and we’ve barely talked since
                      the breakup. I don’t know if this is weird. If it is, I’m
                      weird.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-8a66d853887e42339e311c21e1741983"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      And that was enough. For some reason, it was the
                      third-highest-ranked Scissor statement that did it. None
                      of the others, just that one. The totally hypothetical
                      conversation with the version of my ex-girlfriend in my
                      head about the third Scissor statement got me. Shiri’s
                      Scissor was never really about other people anyway. Other
                      people are just the trigger – and I use that word
                      deliberately, in the trigger warning sense. Once you’re
                      triggered, you never need to talk to anyone else again.
                      Just the knowledge that those people are out there is
                      enough.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-8e48e036704147aeaaf1de402067ac62"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      I thought I’d be done with this story in a night. Instead
                      it’s taken me two weeks, all the way up until Halloween –
                      perfect night for a ghost story, right? I’ve been
                      alternately drinking and smoking weed, trying to calm
                      myself down enough to think about anything other than the
                      third Scissor statement. No, that’s not right, definitely
                      trying not to think about either of the first two Scissor
                      statements, because if I think about them, I might start
                      thinking about how some people disagree with them, and
                      then I’m gone. Three times I’ve started to call my
                      ex-girlfriend to ask her where she is, and if I ever go
                      through with it and she answers me, I don’t know what I
                      will do to her. But it isn’t just her. Fifty percent of
                      the population disagrees with me on the
                      third-highest-ranked Scissor statement. I don’t know who
                      they are. I haven’t really appreciated that fact. Not
                      really. I can’t imagine it being anyone I know. They’re
                      too decent. But I can’t be sure it isn’t. So I drink.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-ddc273563cb74da9a318cfcf6547bd76"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      I know I should be talking about how we all need to unite
                      against whatever shadowy manipulators keep throwing
                      Scissor statements at us. I want to talk about how we need
                      to cultivate radical compassion and charity as the only
                      defense against such abominations. I want to give an
                      Obamaesque speech about how the ties that bring us
                      together are stronger than the forces tearing us apart.
                      But I can’t.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-dde58b3896ad428ea6e64e5b815364f1"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      Remember what we did to Mozambique? How out of some
                      vestigial sense of ethics, we released a low-potency
                      Scissor statement? Arranged to give them a bad time
                      without destroying the whole country all at once? That’s
                      what our shadowy manipulators are doing to us. Low-potency
                      statements. Enough to get us enraged. Not enough to start
                      Armageddon.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-4d603b92d2d3430488f84dc63c9959f8"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      But I read the whole list. And then, like an idiot, I
                      thought about it. I thought about the third-highest-ranked
                      Scissor statement in enough detail to let it trigger. To
                      even begin to question whether it might be true is so
                      sick, so perverse, so hateful and disgusting, that Idi
                      Amin would flush with shame to even contemplate it. And if
                      the Scissor’s right then half of you would be gung ho in
                      support.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-b344ac9b7d0d416fadc800a6940bddb0"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      You guys, who haven’t heard a really bad Scissor statement
                      yet and don’t know what it’s like – it’s easy for you to
                      say “don’t let it manipulate you” or “we need a hard and
                      fast policy of not letting ourselves fight over Scissor
                      statements”. But how do you know you’re not in the wrong?
                      How do you know there’s not an issue out there where, if
                      you knew it, you would agree it would be better to just
                      nuke the world and let us start over again from the sewer
                      mutants, rather than let the sort of people who would
                      support it continue to pollute the world with their
                      presence? How do you know that you’re not like the
                      schoolkid who superciliously says “
                    </span>
                    <span>
                      <em>Nothing</em>
                    </span>
                    <span>
                      {" "}
                      is bad enough to deserve a swear word” when the worst
                      that’s ever happened to her is dropping her lollipop in
                      the dirt. If that schoolkid gets kidnapped and tortured,
                      does she change her mind? If she can’t describe the
                      torture to her schoolmates, but just says “a really bad
                      thing happened to me”, and they still insist nothing could
                      be bad enough to justify using swear words, who do you
                      side with? Then why are you still thinking I’m “damaged”
                      when I tell you I’ve seen the Scissor statement, and
                      charity and compassion and unity can fuck off and die?
                      Some last remnant of{" "}
                    </span>
                    <span>
                      <a
                        href="https://slatestarcodex.com/2017/11/30/book-review-inadequate-equilibria/"
                        className="notion-link link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        outside-view morality
                      </a>
                    </span>
                    <span>
                      {" "}
                      keeps me from writing the whole list here and letting you
                      all exterminate yourselves. Some remnant of how I would
                      have thought about these things a month ago holds me back.
                      So listen:
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-ab6b1511f68a44b18f568bb2e43d3f6c"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      Delete Facebook. Delete Twitter. Throw away your cell
                      phone. Unsubscribe from the newspaper. Tell your friends
                      and relatives not to discuss politics or society. If they
                      slip up, break off all contact.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-c217f3f8b29344fc9d3f03d47cd493b1"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      Then, buy canned food. Stockpile water. Learn to shoot a
                      gun. If you can afford a bunker, get a bunker.
                    </span>
                  </span>
                </p>
              </div>
              <div
                id="block-fc631f5d029747dd89638df5627f3122"
                className="notion-text"
              >
                <p className="notion-text__content">
                  <span className="notion-semantic-string">
                    <span>
                      Because one day, whoever keeps feeding us Scissor
                      statements is going to release one of the bad ones.
                    </span>
                  </span>
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}

export function TheStoryOfTFT() {
    return (
      <>
        <ReadingListNavBar />
        <main className="center-content">
          <div className="super-content-wrapper">
            <div className="notion-header page">
              <div className="notion-header__cover no-cover" />
              <div className="notion-header__content no-cover has-icon max-width">
                <div className="notion-header__title-wrapper">
                  <div className="notion-header__icon-wrapper no-cover has-icon">
                  </div>
                  <h1 className="notion-header__title">
                    (TF)T-Minus Eighteen Weeks: The Story of TFT (Part 1) -
                    League of Legends
                  </h1>
                </div>
              </div>
            </div>
            <div className="super-content max-width">
              <article
                id="block-reading-list-december-2022-tft-minus-eighteen-weeks-the-story-of-tft-part-1-league-of-legends"
                className="notion-root"
              >
                <div className="notion-page__properties">
                  <div
                    className="notion-page__property"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "160px 1fr",
                      gap: 8,
                      minHeight: 36,
                    }}
                  >
                    <div className="notion-page__property-name">
                      <span>Original URL</span>
                    </div>
                    <div className="notion-property notion-property__url property-undefined">
                      <span className="notion-semantic-string">
                        <span>
                          <a
                            href="https://www.leagueoflegends.com/en-us/news/dev/tf-t-minus-eighteen-weeks-the-story-of-tft-part-1/"
                            className="notion-link link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            https://www.leagueoflegends.com/en-us/news/dev/tf-t-minus-eighteen-weeks-the-story-of-tft-part-1/
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div id="block-root-divider" className="notion-divider" />
                </div>
                <div
                  id="block-6f93989ea30044db8891d52613fe7858"
                  className="notion-image page-width"
                >
                  <picture>
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/3b38e01f-6eeb-4af7-9207-bcb2e1ffecea.jpg?b=data:image/png;base64,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?w=750&f=webp"
                      media="(max-width: 546px)"
                      type="image/webp"
                    />
                    <source
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/3b38e01f-6eeb-4af7-9207-bcb2e1ffecea.jpg?b=data:image/png;base64,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?w=750"
                      media="(max-width: 546px)"
                    />
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/3b38e01f-6eeb-4af7-9207-bcb2e1ffecea.jpg?b=data:image/png;base64,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?w=1500&f=webp"
                      type="image/webp"
                    />
                    <img
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/3b38e01f-6eeb-4af7-9207-bcb2e1ffecea.jpg?b=data:image/png;base64,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?w=1500"
                      alt="image"
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        display: "block",
                      }}
                      width={1500}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div
                  id="block-48055a2b037f45bcb2c394275ce48cea"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        What do you get when you add 12 devs, eight weeks, and
                        League of Legends together? TFT, obviously.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-dcce7bbcc38347f4bf58ba155c27dc94"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        <em>
                          Editorial note: Hey! Instead of dumping an absolute
                          truckload of text on you, we decided to split this
                          story into two-parts. The second part will be
                          available tomorrow, 4/3, at 10:00am PT.
                        </em>
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-729e8f0b69a04c0bbe00997a3c5fa611"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “Hey, have you tried Auto Chess?” There was no escaping
                        this question at Riot in the first few months of
                        2019—either you were talking Auto Chess, or you risked
                        being “ok boomer”ed by your team.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-b807b4c28aff4f5591f8a00e77eb4733"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        It didn’t take long for that question to become, “Wait,
                        why don’t{" "}
                      </span>
                      <span>
                        <em>we</em>
                      </span>
                      <span>
                        {" "}
                        make something like this?” We thought it was worth a
                        try, but it needed to be done quickly because there was
                        no way we were the only ones thinking this could be a
                        big deal. Still, it didn’t make sense to take a bunch of
                        League’s devs off their projects to pursue something we
                        weren’t 100% sure about. So we kept the team small.
                        Twelve people small.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-bd96f1548be8446f9082e5414e6cfa41"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        Since we didn’t want to risk being left behind, we gave
                        ourselves an... aggressive timeline.{" "}
                      </span>
                      <span>
                        <strong>Eighteen weeks</strong>
                      </span>
                      <span>
                        . Eight to see if we could make something fun and ten to
                        actually do it. That left us with two questions: How do
                        we even? And who’s dumb enough to try?
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-479dbe86aaf843aea38f3e72dfc0d2c8"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        The devs you’ll be hearing from (who are just a small
                        part of the initial TFT team):
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-800072d4f45f4061af008f96579d348d"
                  className="notion-image page-width"
                >
                  <picture>
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/9c59201a-98f9-4a87-87e1-e4dd37eac2d8.png?b=data:image/png;base64,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?w=750&f=webp"
                      media="(max-width: 546px)"
                      type="image/webp"
                    />
                    <source
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/9c59201a-98f9-4a87-87e1-e4dd37eac2d8.png?b=data:image/png;base64,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?w=750"
                      media="(max-width: 546px)"
                    />
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/9c59201a-98f9-4a87-87e1-e4dd37eac2d8.png?b=data:image/png;base64,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?w=1500&f=webp"
                      type="image/webp"
                    />
                    <img
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/9c59201a-98f9-4a87-87e1-e4dd37eac2d8.png?b=data:image/png;base64,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?w=1500"
                      alt="image"
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        display: "block",
                      }}
                      width={1500}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div
                  id="block-4576d3ac43ac4d72aaa71bfec0ee3f7e"
                  className="notion-image page-width"
                >
                  <picture>
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/068b333a-4c6c-425c-9364-747499366588.png?b=data:image/png;base64,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?w=750&f=webp"
                      media="(max-width: 546px)"
                      type="image/webp"
                    />
                    <source
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/068b333a-4c6c-425c-9364-747499366588.png?b=data:image/png;base64,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?w=750"
                      media="(max-width: 546px)"
                    />
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/068b333a-4c6c-425c-9364-747499366588.png?b=data:image/png;base64,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?w=1500&f=webp"
                      type="image/webp"
                    />
                    <img
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/068b333a-4c6c-425c-9364-747499366588.png?b=data:image/png;base64,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?w=1500"
                      alt="image"
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        display: "block",
                      }}
                      width={1500}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div
                  id="block-334fdeb0211f42c7a2882a9fdf8b5beb"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        Ran develops machine learning features for Teamfight
                        Tactics. She knows your MMR, she gives you LP, and
                        sometimes she matches you against the strongest player
                        in the lobby.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-25723329dc334c4f879a0024ee11e4f4"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        MapleNectar was the product lead for TFT. Since the time
                        of this interview, he’s retired from Riot and moved to
                        the frozen tundra of Canada to partake in the
                        consumption of mass quantities of maple syrup and
                        poutine.
                      </span>
                    </span>
                  </p>
                </div>
                <h2
                  id="block-5e010ee2802a4c5da6c3e089887d4bee"
                  className="notion-heading"
                >
                  <span
                    className="notion-heading__anchor"
                    id="5e010ee2802a4c5da6c3e089887d4bee"
                  />
                  <span className="notion-semantic-string">
                    <span>18 Weeks Until Launch: The Countdown Begins</span>
                  </span>
                </h2>
                <div
                  id="block-92805e0c41ef400da9f6ed3806f62f20"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “We went through all the pitches for a League
                        autobattler and formed a high-level outline,” says
                        Meddler.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-8e70a35b9c6a4833b65a7ab830f06432"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        There were three goals: Improve the design (better
                        controls and UI, faster rounds, etc.), apply our over
                        200 years of collective experience (read: balancing and
                        adding features), and—arguably the most important—make
                        it fun enough that the b o o m e r s who weren’t playing
                        Auto Chess wanted to play.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-8784b4ad314d4ea09659229ff3b2be2b"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “Once the core team was formed, we had eight weeks to
                        identify whether it was even possible to build,” shares
                        Riot Wrekz. “And we had to figure out if it was any
                        good. We wanted it to be unique and fun, but still have
                        that{" "}
                      </span>
                      <span>
                        <em>thing</em>
                      </span>
                      <span> that drew us to the genre.”</span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-adb84fb701cc4d20bd83131e89fd7aab"
                  className="notion-image page-width"
                >
                  <picture>
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/5cd8bd90-8750-486b-b958-5c2e32cccc4d.jpg?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAIAAAAUMWhjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAH0klEQVRIiTWRS4wbBx3GZ8l6/R6vPWPP2POy5z0e2zPjx3ietsfe9WPXTrzZ2LtJuslmQ0KyTSpoRBIolyARcWlR1aqlygGBQAIERarUDVGUEChRANEDEnDghISEBKioFw7tpWh2G+k7fNJofr//NwNYGuZqhKvmbZU1Vd6tSe267FYFqyq29EpLV1t6pWNoXavWd5ue2Vhxjb5nD7v2WteerDrHV+0TA+fEoHUYZ2PobK2756fepXl3b9Y5O3UAt0Y5VdpSaEthbJV1NMHSBFMTrKrkNspOveTUSx2j2rP1vtvsmI2ea/TcZr9lDDv2eNUdefa4Zx3vO9OhOx0404E9X3d3pt7O1Dt3sjNbawCOljcVylRpU2WNEq1X6IbMmL5DtDSxpZf9BWa16+hdW+/Yuk939UHbWOvaw4611rXHq87xgTNZtU+sWptDZ77mnh675za8M8fd2bgJOBphKpStMobKNkuMobD1It2Q2abCG6r/oT6f0ii3zXrLqrtGtes0ek590DZGnj3yrPGqr5l0zWnf3hw6s5EzX3fna86ZSWs6qPsLDCVvq4ylcc0S0ywxZQ7XhLyhCobq79ArvKVrg8HA0jWzrli65hjVVrO64jR8QccYdYx1rznp+YLZ0Nkc2hsDazZ0pn1z2tcBU8YthdaL+aZM63JBr9BHCw7Dmaqocvnze19643s/u3jlxQcPH95/8OD9g/cfP3m8e3bumeqoYwxb+rhrjr3mpNvcGDqbh5r5yJ0N/QIYFcIokk0pr4uULlG6lK+L+apIawJdk5i6xMpM7pU73/7uD35+99U3//fpJx99/PG/P/rvp599dvurNxxNHLaaI1df7+hjz8/Ea0y8xnzobA+dWa856+qAreSNUsGusEaRtmTGVjmrzBmy0ChyusSpXKEu8VdfunnpK1/71mtvPX72hwe/efrwt8/++Je/3rxxw6uXx54zadkn2vZ81Z31nO1hZ2vYemG9uzvpn13zzoxcwC3jToUyFL5RlFSRk9i8JvIyy9YkSeG5qihUJVmvNjp2q9furbS63VZ30BsMO701t72i1XpKta9po6p2otncdJyTbWe26s2GK/PxYPfkeG+6ArRltKdgRQxCYjFvGblKKuM4ei2vbiSwLyLCaiQ9S2JnEJYIBIlAkI3E3CS6EUFv4dqFhfDOFxK3mfp+hrnL6PcWkXcWwdeNtTtG9+3B1p3WqCeyW24FcKWMV85W6RSRSLxVGRwo0wNz+73y5JfO6SfDyy8lmXvKyv3xJT4UE0DYI/KvNwavCsbvTl37T5T8SZB4tHHl163ZQ/fkJ/HKv6LS/fXzTyeXfzW9/MPJudWicLpVAtpFxKtkbQ5mwOV72vqPifaBtf1Trv8m6/xCWH9H9L4vrfzI3ORC0XKWWmOF19SV73DmU3f+z+ixJ2H+yWjvkbHxyNz4RwT5e6F70N/5YL7/wXz/lZWRJ3NbrRLQKmY65bQjJLFY7CJT+6bsXcmV7lZHp5P526J7AeVvF52zpMjGQCEBNZDsSgLdzZdexKXdhYVbmLBfKO3j4sv5yoWFxVsod63U3CvXr+utNVXpFvNTuwjoHGzw6Rq7nEtEM5EAHDqGR0Jo4BgUWsqFlqh4jIxECDDOQikGSrFwSkQyxeRyA0q5BOagmTaCdFB0kEM7DFVCoSaBNkhUI5E6jrQlatgQABFPSMSyREBFKlWmEQmHirkUC0dfKCv3T+29e+r8wam997b33v7y9Te+cfPe12++e+36o51LzzbO/v7UqQ9Pn//w7MU/be/9bXPnz8en1/S6qwmDutRTeK/CtGXGYLMAl43yOZDHlkU8yWUTLAoyCEilwB1Fe9luXbdb1y3nmuWcG3S31lbO9L1dx76o6/tKbb+mXKk3rurmFcPcb+g3mvr5Zl2XCq7KWTLd4PEyjVTzGYBBY2wW5LEElwUZNM4gviCPJDJQOJkMJhOhBBhC4DgUD6HLMSy9TOVgEkdIAkGgBEujIosLLMazuMiRZZ4wigVTZpoyU6IRiYBkMgXQmTCFhGk0xmTjeSRGZUAyHSfScQKOYalIdjmMLkcJGMwl43Q2JVCoHxIVyCwOgSUmV5MYlS9oXEHjyCpH1AWiSCICDheptIAt89gyQKXDpJ9oHomQmQiVOaSn4zgcy6Vi2WQUSURyKb+zeIYnEZ5EBCorkCgOgRKNqRyp8qTCk2WOKLFYjSdkGpGoNJdLcLkEmwUBEvbpOBwiDjVEOp6Dojgcw6BoLhXBUlG/QFEMigsUKhZQic6KBVQoIASckAqof75AKzxRZHIlFiuxmEghPJaiUTCPgPkMCMiFQA6KHAmeHx7B4c8dmK+JZVMxPO3jZBaT6KxEY2IB8ZUkWmIxhSdkNicz2SKTFQsIk0tSGdAnQFEMjgKd2kIajOJwBIOfHwvHMF/wnJ4ME3Asn00KFCKxqMigMpuTaBSDQJ5EFA736ayPFmmUxTN4Oo7B/ltoMppNRoHj7YV4KJqDwtlU5Cg4DGJpEPfXRMlMnMjEMSjC5JI8iUg0IrOoWECkApJLxTkCKnM+vcigYiHD4hCZAbHDn5dJRA4TBraHCwCwGFxaDCwuBhaPHSW4tBgKLh2VwOKxVCyYjIfikVAktBQPB+Nhv8fDQRyOgdHwUQ6fBkNLgVAwEFoKBAOB4JJf/g+Dyc5345muKgAAAABJRU5ErkJggg==?w=750&f=webp"
                      media="(max-width: 546px)"
                      type="image/webp"
                    />
                    <source
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/5cd8bd90-8750-486b-b958-5c2e32cccc4d.jpg?b=data:image/png;base64,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?w=750"
                      media="(max-width: 546px)"
                    />
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/5cd8bd90-8750-486b-b958-5c2e32cccc4d.jpg?b=data:image/png;base64,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?w=1500&f=webp"
                      type="image/webp"
                    />
                    <img
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/5cd8bd90-8750-486b-b958-5c2e32cccc4d.jpg?b=data:image/png;base64,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?w=1500"
                      alt="image"
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        display: "block",
                      }}
                      width={1500}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div
                  id="block-5899df2575834ef98b1dce19554032f3"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        <em>
                          “On day one I put a giant red doomsday clock on the
                          wall,” laughs Riot Wittrock. “It was a little
                          intimidating, but we kept it up as a constant reminder
                          that we needed to remain focused.”
                        </em>
                      </span>
                    </span>
                  </p>
                </div>
                <h2
                  id="block-1dd783ebd6564a3aba03093ea0d178c2"
                  className="notion-heading"
                >
                  <span
                    className="notion-heading__anchor"
                    id="1dd783ebd6564a3aba03093ea0d178c2"
                  />
                  <span className="notion-semantic-string">
                    <span>17 Weeks Until Launch: League of Prototypes</span>
                  </span>
                </h2>
                <div
                  id="block-a85ebea65edb41269a1981aa6e24875e"
                  className="notion-image page-width"
                >
                  <picture>
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/c563e65b-3d3e-442d-b22d-33380a9fd411.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEElEQVQokWNggAEmRkYICWcw4AaYsvjVowMeDg5WJiY4l5+Tk4mRkZWJiZ+TE66Al4ODgYGBl4MDYjQHGxtElpeDgwVJLwLYKyqzMDGJ8fF7qKhfqix61lYLt6PLw+tWfZmCiOi3SW2eahpMjIz3GiuS9E081TT+L55Sbm3HwMCwLzut38vHVEb+15SOZdGR6H5iZWK6VlPCwMDgqax+r7Hi/95V/9fNg7hIgItrV2bK/9m9qmLi//euanfzyDe3/r9/rbWcEkj8xNZdmSkeKur/D60PVNfp8vD6f2LrrfoydAsEubkhFvR4+/xfPfv/4inP2mohUtMCAv5vWybCz68nI/v/znEbeSUNcYksM6v/53ZLCQj+P7G10NxGWVTMUVn1/5X9ahKS/+dOWhYdxcDAgBJQnCwscsIiDAwMwpycHipqrzrrreQUIVLWckpXq4t4WFlD1bUWhYdK8PM7KanOCw10UlC2kJHdmZEoKyRkIavQ5OSUY2KuLCJyMDdVVkAQe7THx8e/ff8+JjERFGisrHDxsKSk46dOXrp7V9/EhIGBgZ2D49LDhw9evVq8amVNbzczCzMTI+Ps5cunLJz/6uO7A+fPS8vKYk884uLiysrKEuLirExMcPuZGBklweKqKipioqIMDAxsrKyqyspKiooqSkoqSkoQNarKyipKSupqahrq6txcXEQkVSoBAOa2kDcnUA3OAAAAAElFTkSuQmCC?w=750&f=webp"
                      media="(max-width: 546px)"
                      type="image/webp"
                    />
                    <source
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/c563e65b-3d3e-442d-b22d-33380a9fd411.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEElEQVQokWNggAEmRkYICWcw4AaYsvjVowMeDg5WJiY4l5+Tk4mRkZWJiZ+TE66Al4ODgYGBl4MDYjQHGxtElpeDgwVJLwLYKyqzMDGJ8fF7qKhfqix61lYLt6PLw+tWfZmCiOi3SW2eahpMjIz3GiuS9E081TT+L55Sbm3HwMCwLzut38vHVEb+15SOZdGR6H5iZWK6VlPCwMDgqax+r7Hi/95V/9fNg7hIgItrV2bK/9m9qmLi//euanfzyDe3/r9/rbWcEkj8xNZdmSkeKur/D60PVNfp8vD6f2LrrfoydAsEubkhFvR4+/xfPfv/4inP2mohUtMCAv5vWybCz68nI/v/znEbeSUNcYksM6v/53ZLCQj+P7G10NxGWVTMUVn1/5X9ahKS/+dOWhYdxcDAgBJQnCwscsIiDAwMwpycHipqrzrrreQUIVLWckpXq4t4WFlD1bUWhYdK8PM7KanOCw10UlC2kJHdmZEoKyRkIavQ5OSUY2KuLCJyMDdVVkAQe7THx8e/ff8+JjERFGisrHDxsKSk46dOXrp7V9/EhIGBgZ2D49LDhw9evVq8amVNbzczCzMTI+Ps5cunLJz/6uO7A+fPS8vKYk884uLiysrKEuLirExMcPuZGBklweKqKipioqIMDAxsrKyqyspKiooqSkoqSkoQNarKyipKSupqahrq6txcXEQkVSoBAOa2kDcnUA3OAAAAAElFTkSuQmCC?w=750"
                      media="(max-width: 546px)"
                    />
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/c563e65b-3d3e-442d-b22d-33380a9fd411.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEElEQVQokWNggAEmRkYICWcw4AaYsvjVowMeDg5WJiY4l5+Tk4mRkZWJiZ+TE66Al4ODgYGBl4MDYjQHGxtElpeDgwVJLwLYKyqzMDGJ8fF7qKhfqix61lYLt6PLw+tWfZmCiOi3SW2eahpMjIz3GiuS9E081TT+L55Sbm3HwMCwLzut38vHVEb+15SOZdGR6H5iZWK6VlPCwMDgqax+r7Hi/95V/9fNg7hIgItrV2bK/9m9qmLi//euanfzyDe3/r9/rbWcEkj8xNZdmSkeKur/D60PVNfp8vD6f2LrrfoydAsEubkhFvR4+/xfPfv/4inP2mohUtMCAv5vWybCz68nI/v/znEbeSUNcYksM6v/53ZLCQj+P7G10NxGWVTMUVn1/5X9ahKS/+dOWhYdxcDAgBJQnCwscsIiDAwMwpycHipqrzrrreQUIVLWckpXq4t4WFlD1bUWhYdK8PM7KanOCw10UlC2kJHdmZEoKyRkIavQ5OSUY2KuLCJyMDdVVkAQe7THx8e/ff8+JjERFGisrHDxsKSk46dOXrp7V9/EhIGBgZ2D49LDhw9evVq8amVNbzczCzMTI+Ps5cunLJz/6uO7A+fPS8vKYk884uLiysrKEuLirExMcPuZGBklweKqKipioqIMDAxsrKyqyspKiooqSkoqSkoQNarKyipKSupqahrq6txcXEQkVSoBAOa2kDcnUA3OAAAAAElFTkSuQmCC?w=1500&f=webp"
                      type="image/webp"
                    />
                    <img
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/c563e65b-3d3e-442d-b22d-33380a9fd411.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEElEQVQokWNggAEmRkYICWcw4AaYsvjVowMeDg5WJiY4l5+Tk4mRkZWJiZ+TE66Al4ODgYGBl4MDYjQHGxtElpeDgwVJLwLYKyqzMDGJ8fF7qKhfqix61lYLt6PLw+tWfZmCiOi3SW2eahpMjIz3GiuS9E081TT+L55Sbm3HwMCwLzut38vHVEb+15SOZdGR6H5iZWK6VlPCwMDgqax+r7Hi/95V/9fNg7hIgItrV2bK/9m9qmLi//euanfzyDe3/r9/rbWcEkj8xNZdmSkeKur/D60PVNfp8vD6f2LrrfoydAsEubkhFvR4+/xfPfv/4inP2mohUtMCAv5vWybCz68nI/v/znEbeSUNcYksM6v/53ZLCQj+P7G10NxGWVTMUVn1/5X9ahKS/+dOWhYdxcDAgBJQnCwscsIiDAwMwpycHipqrzrrreQUIVLWckpXq4t4WFlD1bUWhYdK8PM7KanOCw10UlC2kJHdmZEoKyRkIavQ5OSUY2KuLCJyMDdVVkAQe7THx8e/ff8+JjERFGisrHDxsKSk46dOXrp7V9/EhIGBgZ2D49LDhw9evVq8amVNbzczCzMTI+Ps5cunLJz/6uO7A+fPS8vKYk884uLiysrKEuLirExMcPuZGBklweKqKipioqIMDAxsrKyqyspKiooqSkoqSkoQNarKyipKSupqahrq6txcXEQkVSoBAOa2kDcnUA3OAAAAAElFTkSuQmCC?w=1500"
                      alt="image"
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        display: "block",
                      }}
                      width={1500}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div
                  id="block-15f1cf0882984a0dafad8ca6b917ad68"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “We spent a lot of time the first few weeks figuring out
                        how to get a prototype working. Which... was a
                        challenge,” says Riot Wittrock.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-2f5a4016486b40faa5327d7bde4d13aa"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        The team started by using assets from League—which
                        wasn’t always smooth sailing.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-0fc34c6e0c804613a27972d7b0cef453"
                  className="notion-image page-width"
                >
                  <picture>
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/0eeed631-47f3-4786-a355-0111c9928525.png?b=data:image/png;base64,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?w=750&f=webp"
                      media="(max-width: 546px)"
                      type="image/webp"
                    />
                    <source
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/0eeed631-47f3-4786-a355-0111c9928525.png?b=data:image/png;base64,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?w=750"
                      media="(max-width: 546px)"
                    />
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/0eeed631-47f3-4786-a355-0111c9928525.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAVCAIAAACor3u9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAHpklEQVQ4jQXB+28ThwEAYP+wP2DqHq06VjYCeTpOHL/f9tk+38Nn+84+P8/2+exzbJNz/IpfeRLyKGkI0AICkjZQ1EULhJDRFaKURxFQVh5KKSkI0rKBiqDTtKqbWDVNun2foNEilnttiqjBlLbLoupt3jeFTGsXq3AUgmSdBkugbzrjqCcdVUqXN6hzFqjmDEz0ussxOatuS7Q1BLcoab0pjapili6PrdHa0YJI2qw6PemyUF6tFxcYGdJby+KVpKfCeoZS7aHGhuCv2pMt9povfWAgsS9PjDCuUgQuOrfRvzPWse5D1frKce8upolp2BL/hcqzwx4n3BXWU8+Q1R5tlGhzqttAlQJDVC7YlggKDGGPnYvqaNAYgxHOB2QshqReFhdq+7TEOOUbi/vGks4+D1rDhUmxfSzkH2fNpN3YC0pSHaoM4KnEQtWMnob0NIhytMqPt+N6mcsotoFqwi6CtAJLtx/u8YMZH5ghABZDe8OuPA3lMGVR6hsPB3Ylw1Np96DfUraqcjJ0wusbZGw0bSq7fdOV977jR09f3LW6Hnh3rynucJYSCMc0OERCokthtyud2GsNbwnUCZs56bKwJMDi3qEUNcaZUzjAYsR4kN6bi80UfZO0verUprtkO8VAHWNn32bPrgI1yjGQHv4bP7LJjz7noydWANpuThEaBmiLtXZGZDrCIcOwVq1CoIvZYC6AFHyqqB4thB0FypLEjT244m0nvJsMjjHEeBjoNcmTUlMJ1ufByB6O7E0rcDNaoaLn76cuPU3OXcJmDoNpFOJC/nzJhGAtPoXCDWkJl9hmFTjycbzcTQ4lwZzLvNONcCGkGKvsHanWwtWrn1dXzgElszwnbWaaG9kWeHdw6uvN3J4jRqldx3jTC8vM5CyCxdGB6e4P3p15zA+svdTgWWN5VEEhMsQmAnQC72DWwkA2GkYykCkpBWJaZcY62p/eZ2iavvuP8Sc/abmOptRWRVb9G/IN9J2e8pWX0maPusXzy+3C6OJq30fXyb79sZM36fkTB1/xptycPDRZvPEfESYVWY0SnU0QzNA5xBgJgwixHQBfg/Q/gxhV4M83c1cejX/P91z7ylCQyeOmFlTS4mp2jKdin2yq4mOSwERg5aL12CR758fiM374Jc+cPFV9zGMz52XJ6cz1f3X5rFt1O1pBpwDz22gaM9QoWzfWzjS2eX6NRUz40go6fyR8YU23v+QYDsJ5Csl5TVkEHyen7p6rHp32DEz45k/qhuPwwil0eg88NoNMjvrn/xA8c801d968d0lIgi1Qh9BsEIjBrVZ1s05tJLXq9IdLtdXPShO7mPeXuvS6+p0Nx2yFO7vy3lN+3+MfgShZ3Ov660b62zX4wOKB0vKF8MHJkfUnA7ceFD69ws4elvil22y/3aJ/fZuu4S3N662QqB00CIxOjZ/y2hNZioq6h46Uz16rHTuR/+K5VK9IX3sWOXuydPPh0Rf86OElFNNwHPLkTur57eCehWlqcQ0u5frX/3vo6pOZdG9+fk2XgBSUTYRpRE7V781vtkHNModFIDNsZ/cd7V7doLLV9LlNU5JN7z/U9w3ffeHb+j959tRS9tLGxCs+feYvTqfEN+xferB0/Ivjc/e+HHrCm3ZnE5cf9q19VztxLfeYV2a8QkwqJSGxR6cMQYYYrAlZBApro7c+ErpyP/X+B/T1vzumBulauefhv9nb32Rvv4rNztHLn3Lr/4uvbQZPfWYaK8TOrvat/5D946XY4i3bMOdaWEzc+oG6+oi8cEdeYoQusSxkVUYAWzrsyqWwVFCgdmv8FgUAbkXxNq/b6AYbBufnuRtfxj+5uOvyvcShabgv5KoWHZWUYyCnZEHXUL/cqJFLGhy5VGbuiDqqMHGEJmNtCjWraXsXJW9ytwlJMchirmwoXOsWiMMSRdTWHumUxSVgJmAvJabu/DSzcGv24uMFns98uKgN24hq3llKOPsypp3+1PGPIkny5wIBfvz0249eQRk/xIVUcX1nRKJhrB2RNk0CcJUDroIfL3jIYkQgCrSJQmJ9Coe4GEB74TyXX33B1Y9NdSf77/PO/moH0oVX8/YemhyqwOWd0YP7apc3oYEDrhMfFz9/boqS5kQEztBwLqhg1U3UFnueTE2VMhNFqp9Gk4SgI9TRRatsOb+/VkS6Q6ae3twjPr/OF+7y1We8c3pUmdQQtTySiRC1ApKPhM9crn/PD7/g8/f42IWnSj8OpSPeat5dSSlYnTwuVtJyaiieGs0ww0y0GhWoo4B1JxEaqfgG+6CeALFrJLr8ILz8dXRlI7T8laGckrNy92AO7WHc/QWUo/GDh6iPN4Knb4X/9NC/cAMvF+AM5a31hndXsUJUw1hBDg5V6Wh/LDeZ6nunKGhCJQbKYfQRQhpuiHaqQ6gp4JFgFlOU0FF2EaHRht0qPyFzgybWZ2FCIlwr8wJQxK8hMJ3fZaS9QrdMaNcg8bCRIncgErnXpPdAVK8/UvGlBiKCdlBJl9MN8k6lUS6zaDS03d1NbZG3ikwKiU6Ixv16t7MT1XZAQBNoCGTiKhI1AFJM+AaBm5lijzpgE6NAs0VCskE3FxY7gC7UuEMmzNZZnAPgpOz/3pYriHelwIgAAAAASUVORK5CYII=?w=1500&f=webp"
                      type="image/webp"
                    />
                    <img
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/0eeed631-47f3-4786-a355-0111c9928525.png?b=data:image/png;base64,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?w=1500"
                      alt="image"
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        display: "block",
                      }}
                      width={1500}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div
                  id="block-245a22fb61d0406baa1f79c99afa7ed2"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>League’s game engine is </span>
                      <span>
                        <a
                          href="https://technology.riotgames.com/news/future-leagues-engine"
                          className="notion-link link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          custom-built
                        </a>
                      </span>
                      <span>
                        {" "}
                        for one thing: League of Legends. And while some things
                        change (like the map, champions, and dragons), the
                        number of players (generally) doesn’t.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-e105a87547254e0fbab99ada494c3d07"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “Because League’s so heavily hyper-optimized for a
                        10-player game and the 8-player version of TFT we
                        envisioned loaded significantly more assets, we would
                        actually have to run more servers to support the same
                        number of players,” explains Riot Nullarbor. “It was
                        quite taxing on the game client as well.”
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-e7f823af500e4249af6b4ccc963b1bd6"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        On top of this, we wanted players to be able to recruit
                        units (aka champions), place them strategically, and
                        witness the ensuing battle—this “army commander” fantasy
                        was one of the things we found so appealing about Auto
                        Chess. But to do that, each player needed to field more
                        than one champion at a time. And that wasn’t something
                        the servers were built to handle.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-c3c0a080e6c54e859db68f2c84a80059"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        That meant nearly every early game of TFT ended because
                        of lag. There was no finish. No victory. Only lag.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-080f4c6946074077894bfda5c7e3caa3"
                  className="notion-image page-width"
                >
                  <picture>
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/45d38e71-2b3c-4396-bc51-6eb870a0cfa0.gif?b=data:image/png;base64,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?w=750&f=webp"
                      media="(max-width: 546px)"
                      type="image/webp"
                    />
                    <source
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/45d38e71-2b3c-4396-bc51-6eb870a0cfa0.gif?b=data:image/png;base64,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?w=750"
                      media="(max-width: 546px)"
                    />
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/45d38e71-2b3c-4396-bc51-6eb870a0cfa0.gif?b=data:image/png;base64,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?w=1500&f=webp"
                      type="image/webp"
                    />
                    <img
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/45d38e71-2b3c-4396-bc51-6eb870a0cfa0.gif?b=data:image/png;base64,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?w=1500"
                      alt="image"
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        display: "block",
                      }}
                      width={1500}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div
                  id="block-1b143882fddf499b9ed6a0e63f5f91f9"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        <em>
                          Even in later versions of the prototype, lag wasn’t
                          the only bug the team encountered. How do I hold all
                          of these Rakans?
                        </em>
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-ffc4a2847bad4bfa9a5181b10cef0e63"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “There were nine units fighting nine other units, plus
                        up to 10 champions sitting on each player’s bench,” says
                        Riot Nullarbor. “There could be over 100 champions in
                        the game at once, plus these crazy teamfights constantly
                        going on. We had to remove a lot of things that weren’t
                        necessary and then optimize the code. League’s got a
                        much bigger map than we needed, so we were able to cut a
                        lot of that out to get things running.”
                      </span>
                    </span>
                  </p>
                </div>
                <h2
                  id="block-971a0a55de394e66a8a1b151bb70fca1"
                  className="notion-heading"
                >
                  <span
                    className="notion-heading__anchor"
                    id="971a0a55de394e66a8a1b151bb70fca1"
                  />
                  <span className="notion-semantic-string">
                    <span>15-12 Weeks Until Launch: The Gameplay</span>
                  </span>
                </h2>
                <div
                  id="block-29546e11e29747d293bac511907cb584"
                  className="notion-image page-width"
                >
                  <picture>
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/eeab2d7f-1e8b-404b-bba7-693d590038d1.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGklEQVQokWNggAEmRkYmRkY4A8LGBTBl8atHKGJhYkK2DAL4OTmZGBlZmZj4OTkhIjwcHLwcHAwMDLwcHBCVHGxsEFleDg6IISiAiZHRVEZ+VlDQ/3Xz8s2tZYVErOWU4MZ1eXjdqi9TEBH9NqnNU02DiZHxXmNFkr6Jp5rG/8VTyq3tGBgY9mWn9Xv5mMrI/5rSsSw6Et1PLExM73qa+r18PFTUr9UU/9+14v+6eRALBLi4dmWm/J/dqyom/n/vqn4vnzRDs//711rLKYHET2zdlZnioaL+/9D6QHWdLg+v/ye23qovQ7eAl4Pj26S2Z+11rzobNCSlbOSVnrXVQqSmBQT837ZMhJ9fT0b2/53j9orKauISWWZW/8/tlhIQ/H9ia6G5jbKomKOy6v8r+9UkJP/PnbQsOgriaIQFrExMSqJiOzOSlkaFMTEy8nJwSPIJQKSs5ZSuVhfxsLKGqmstCg+VERK2V1SeFxropKBsISO7MyNRVkjIQlahyckpx8RcWUTkYG6qrIAg9mh3CfC7/uxJRmYmyEpWVrh4WFLS8VMnL929q29iwsDAwM7BcenhwwevXi1etbKmt5uZhZmJkXH28uVTFs5/9fHdgfPnpWVl0Y2GACkJSVUVFXFxcWT7mRgZJcXFlZWVVVVUxERFGRgY2FhZVZWVlRQVVZSUVJSUIGpUlZVVlJTU1dQ01NW5ubiwW0ALAABPKZFKCeauYwAAAABJRU5ErkJggg==?w=750&f=webp"
                      media="(max-width: 546px)"
                      type="image/webp"
                    />
                    <source
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/eeab2d7f-1e8b-404b-bba7-693d590038d1.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGklEQVQokWNggAEmRkYmRkY4A8LGBTBl8atHKGJhYkK2DAL4OTmZGBlZmZj4OTkhIjwcHLwcHAwMDLwcHBCVHGxsEFleDg6IISiAiZHRVEZ+VlDQ/3Xz8s2tZYVErOWU4MZ1eXjdqi9TEBH9NqnNU02DiZHxXmNFkr6Jp5rG/8VTyq3tGBgY9mWn9Xv5mMrI/5rSsSw6Et1PLExM73qa+r18PFTUr9UU/9+14v+6eRALBLi4dmWm/J/dqyom/n/vqn4vnzRDs//711rLKYHET2zdlZnioaL+/9D6QHWdLg+v/ye23qovQ7eAl4Pj26S2Z+11rzobNCSlbOSVnrXVQqSmBQT837ZMhJ9fT0b2/53j9orKauISWWZW/8/tlhIQ/H9ia6G5jbKomKOy6v8r+9UkJP/PnbQsOgriaIQFrExMSqJiOzOSlkaFMTEy8nJwSPIJQKSs5ZSuVhfxsLKGqmstCg+VERK2V1SeFxropKBsISO7MyNRVkjIQlahyckpx8RcWUTkYG6qrIAg9mh3CfC7/uxJRmYmyEpWVrh4WFLS8VMnL929q29iwsDAwM7BcenhwwevXi1etbKmt5uZhZmJkXH28uVTFs5/9fHdgfPnpWVl0Y2GACkJSVUVFXFxcWT7mRgZJcXFlZWVVVVUxERFGRgY2FhZVZWVlRQVVZSUVJSUIGpUlZVVlJTU1dQ01NW5ubiwW0ALAABPKZFKCeauYwAAAABJRU5ErkJggg==?w=750"
                      media="(max-width: 546px)"
                    />
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/eeab2d7f-1e8b-404b-bba7-693d590038d1.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGklEQVQokWNggAEmRkYmRkY4A8LGBTBl8atHKGJhYkK2DAL4OTmZGBlZmZj4OTkhIjwcHLwcHAwMDLwcHBCVHGxsEFleDg6IISiAiZHRVEZ+VlDQ/3Xz8s2tZYVErOWU4MZ1eXjdqi9TEBH9NqnNU02DiZHxXmNFkr6Jp5rG/8VTyq3tGBgY9mWn9Xv5mMrI/5rSsSw6Et1PLExM73qa+r18PFTUr9UU/9+14v+6eRALBLi4dmWm/J/dqyom/n/vqn4vnzRDs//711rLKYHET2zdlZnioaL+/9D6QHWdLg+v/ye23qovQ7eAl4Pj26S2Z+11rzobNCSlbOSVnrXVQqSmBQT837ZMhJ9fT0b2/53j9orKauISWWZW/8/tlhIQ/H9ia6G5jbKomKOy6v8r+9UkJP/PnbQsOgriaIQFrExMSqJiOzOSlkaFMTEy8nJwSPIJQKSs5ZSuVhfxsLKGqmstCg+VERK2V1SeFxropKBsISO7MyNRVkjIQlahyckpx8RcWUTkYG6qrIAg9mh3CfC7/uxJRmYmyEpWVrh4WFLS8VMnL929q29iwsDAwM7BcenhwwevXi1etbKmt5uZhZmJkXH28uVTFs5/9fHdgfPnpWVl0Y2GACkJSVUVFXFxcWT7mRgZJcXFlZWVVVVUxERFGRgY2FhZVZWVlRQVVZSUVJSUIGpUlZVVlJTU1dQ01NW5ubiwW0ALAABPKZFKCeauYwAAAABJRU5ErkJggg==?w=1500&f=webp"
                      type="image/webp"
                    />
                    <img
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/eeab2d7f-1e8b-404b-bba7-693d590038d1.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGklEQVQokWNggAEmRkYmRkY4A8LGBTBl8atHKGJhYkK2DAL4OTmZGBlZmZj4OTkhIjwcHLwcHAwMDLwcHBCVHGxsEFleDg6IISiAiZHRVEZ+VlDQ/3Xz8s2tZYVErOWU4MZ1eXjdqi9TEBH9NqnNU02DiZHxXmNFkr6Jp5rG/8VTyq3tGBgY9mWn9Xv5mMrI/5rSsSw6Et1PLExM73qa+r18PFTUr9UU/9+14v+6eRALBLi4dmWm/J/dqyom/n/vqn4vnzRDs//711rLKYHET2zdlZnioaL+/9D6QHWdLg+v/ye23qovQ7eAl4Pj26S2Z+11rzobNCSlbOSVnrXVQqSmBQT837ZMhJ9fT0b2/53j9orKauISWWZW/8/tlhIQ/H9ia6G5jbKomKOy6v8r+9UkJP/PnbQsOgriaIQFrExMSqJiOzOSlkaFMTEy8nJwSPIJQKSs5ZSuVhfxsLKGqmstCg+VERK2V1SeFxropKBsISO7MyNRVkjIQlahyckpx8RcWUTkYG6qrIAg9mh3CfC7/uxJRmYmyEpWVrh4WFLS8VMnL929q29iwsDAwM7BcenhwwevXi1etbKmt5uZhZmJkXH28uVTFs5/9fHdgfPnpWVl0Y2GACkJSVUVFXFxcWT7mRgZJcXFlZWVVVVUxERFGRgY2FhZVZWVlRQVVZSUVJSUIGpUlZVVlJTU1dQ01NW5ubiwW0ALAABPKZFKCeauYwAAAABJRU5ErkJggg==?w=1500"
                      alt="image"
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        display: "block",
                      }}
                      width={1500}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div
                  id="block-6a6df900ee8a420f9d8153c31fdab2d9"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        Riot’s open floor plan means that people are free to
                        walk around, look at walls lined with art, awkwardly
                        scan name tags to find the person who uses a photo of
                        their dog as their Slack icon, and chat at peoples’
                        desks. It encourages collaboration and idea-sharing, but
                        sometimes it’s counterproductive, especially if you’re
                        trying to sprint to a finish line that could be in any
                        direction.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-d1b3ea75b43d42ccaa28d80ceb1b37c4"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “We spent most of the eight weeks of prototyping
                        isolated from the rest of the company. We went as far as
                        pushing ourselves into a corner and putting walls around
                        the team so no one could come and talk to us,” Riot
                        Nullarbor says.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-eedf6e5f019240a1859ba9ea9e8a3d30"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “Yeah, Andrei sent out a bunch of emails basically
                        asking other folks who were interested in what we were
                        doing to{" "}
                      </span>
                      <span>
                        <strong>not</strong>
                      </span>
                      <span>
                        {" "}
                        come share their ideas,” Riot Wrekz adds. “It was
                        unusual for Riot and felt a little bit exclusionary, but
                        it was important for efficiency.”
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-3b80b6baa02640b5b63cb7f7f2f5f5bf"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “And influence,” offers Kilmourz. “Leaders wanted us to
                        explore on our own and not be too influenced by other
                        games in the genre.”
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-5b7f6691a083464aa1d2ab587a94c70b"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        So the team sat in a small corner and tried to figure
                        out how the hell they were going to make TFT.
                      </span>
                    </span>
                  </p>
                </div>
                <h2
                  id="block-3e87374cea55494f97e4eeb87803d6ff"
                  className="notion-heading"
                >
                  <span
                    className="notion-heading__anchor"
                    id="3e87374cea55494f97e4eeb87803d6ff"
                  />
                  <span className="notion-semantic-string">
                    <span>Week 14: Trains, Towns, and User Interface</span>
                  </span>
                </h2>
                <div
                  id="block-313117b85b9440afba93b1544114df88"
                  className="notion-image page-width"
                >
                  <picture>
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/e9fe1c6e-fa88-4580-a27a-1d51e2f97077.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACFElEQVQokWNgwABMjIxwEg2gCTIxMmKK4NILAqxMTBxsbAwMDNzs7MiCfJycDAwMfJycEFkIm5mRkZmRkZeDAyLCy8HBwcbKhCSCbq04H/+1qqLdGcmTfHz+b10cqakHkRXn43/bVR+jZeCprP5zciszI6OlrOKjpkpVMfEFYaF/p3ZI8PLJCgm/7ao3kZarsXX4P7vXUlYRxR8QlrWc4v+ti/8vntzl7hGkrt3m4gaRVReX+L90aomFTaqh6f+tiz1U1C9VFNxrKNeXlvm/ePL/tXMSdIwWhIX+n92rKS75tqv+/77V/mpaDAwMzGgBxcrEtCI68v/aeQwMDPX2TtZyIFcwMDD8P7G5yNKWi51jS3L836kdKqJiKuLi/xdPmRkY6KGi8X/3cnVxCWVRsVNFOc9aq1XEJf5f2y/Ow4cliCQEBHZnJFjLyDEwMMgLC3OzQoN7RXR4vI4BFwvLvqwkV2U1NTEJd0WV5dGhMgICvZ7uaQYm8sIijvLKa2LDVUXF4rX1J3p7YoleFhYWBgYGR3f3aw/uFxUWQgSZwYIKykqb9u69futWbWcbRLy2tfnj//8Tp0xZtnG9sooKAwODnoHBki2bFq9a+fzj57LmZuxJiIGBQUpCQllZWUJCAjmdCfDxKSsqKisry0hLQ0QkJSXV1dRkZWXU1dQE+EChISgoqK6mpqigoK6mJi8HCgP6AQDXu4jBgMK9mgAAAABJRU5ErkJggg==?w=750&f=webp"
                      media="(max-width: 546px)"
                      type="image/webp"
                    />
                    <source
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/e9fe1c6e-fa88-4580-a27a-1d51e2f97077.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACFElEQVQokWNgwABMjIxwEg2gCTIxMmKK4NILAqxMTBxsbAwMDNzs7MiCfJycDAwMfJycEFkIm5mRkZmRkZeDAyLCy8HBwcbKhCSCbq04H/+1qqLdGcmTfHz+b10cqakHkRXn43/bVR+jZeCprP5zciszI6OlrOKjpkpVMfEFYaF/p3ZI8PLJCgm/7ao3kZarsXX4P7vXUlYRxR8QlrWc4v+ti/8vntzl7hGkrt3m4gaRVReX+L90aomFTaqh6f+tiz1U1C9VFNxrKNeXlvm/ePL/tXMSdIwWhIX+n92rKS75tqv+/77V/mpaDAwMzGgBxcrEtCI68v/aeQwMDPX2TtZyIFcwMDD8P7G5yNKWi51jS3L836kdKqJiKuLi/xdPmRkY6KGi8X/3cnVxCWVRsVNFOc9aq1XEJf5f2y/Ow4cliCQEBHZnJFjLyDEwMMgLC3OzQoN7RXR4vI4BFwvLvqwkV2U1NTEJd0WV5dGhMgICvZ7uaQYm8sIijvLKa2LDVUXF4rX1J3p7YoleFhYWBgYGR3f3aw/uFxUWQgSZwYIKykqb9u69futWbWcbRLy2tfnj//8Tp0xZtnG9sooKAwODnoHBki2bFq9a+fzj57LmZuxJiIGBQUpCQllZWUJCAjmdCfDxKSsqKisry0hLQ0QkJSXV1dRkZWXU1dQE+EChISgoqK6mpqigoK6mJi8HCgP6AQDXu4jBgMK9mgAAAABJRU5ErkJggg==?w=750"
                      media="(max-width: 546px)"
                    />
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/e9fe1c6e-fa88-4580-a27a-1d51e2f97077.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACFElEQVQokWNgwABMjIxwEg2gCTIxMmKK4NILAqxMTBxsbAwMDNzs7MiCfJycDAwMfJycEFkIm5mRkZmRkZeDAyLCy8HBwcbKhCSCbq04H/+1qqLdGcmTfHz+b10cqakHkRXn43/bVR+jZeCprP5zciszI6OlrOKjpkpVMfEFYaF/p3ZI8PLJCgm/7ao3kZarsXX4P7vXUlYRxR8QlrWc4v+ti/8vntzl7hGkrt3m4gaRVReX+L90aomFTaqh6f+tiz1U1C9VFNxrKNeXlvm/ePL/tXMSdIwWhIX+n92rKS75tqv+/77V/mpaDAwMzGgBxcrEtCI68v/aeQwMDPX2TtZyIFcwMDD8P7G5yNKWi51jS3L836kdKqJiKuLi/xdPmRkY6KGi8X/3cnVxCWVRsVNFOc9aq1XEJf5f2y/Ow4cliCQEBHZnJFjLyDEwMMgLC3OzQoN7RXR4vI4BFwvLvqwkV2U1NTEJd0WV5dGhMgICvZ7uaQYm8sIijvLKa2LDVUXF4rX1J3p7YoleFhYWBgYGR3f3aw/uFxUWQgSZwYIKykqb9u69futWbWcbRLy2tfnj//8Tp0xZtnG9sooKAwODnoHBki2bFq9a+fzj57LmZuxJiIGBQUpCQllZWUJCAjmdCfDxKSsqKisry0hLQ0QkJSXV1dRkZWXU1dQE+EChISgoqK6mpqigoK6mJi8HCgP6AQDXu4jBgMK9mgAAAABJRU5ErkJggg==?w=1500&f=webp"
                      type="image/webp"
                    />
                    <img
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/e9fe1c6e-fa88-4580-a27a-1d51e2f97077.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACFElEQVQokWNgwABMjIxwEg2gCTIxMmKK4NILAqxMTBxsbAwMDNzs7MiCfJycDAwMfJycEFkIm5mRkZmRkZeDAyLCy8HBwcbKhCSCbq04H/+1qqLdGcmTfHz+b10cqakHkRXn43/bVR+jZeCprP5zciszI6OlrOKjpkpVMfEFYaF/p3ZI8PLJCgm/7ao3kZarsXX4P7vXUlYRxR8QlrWc4v+ti/8vntzl7hGkrt3m4gaRVReX+L90aomFTaqh6f+tiz1U1C9VFNxrKNeXlvm/ePL/tXMSdIwWhIX+n92rKS75tqv+/77V/mpaDAwMzGgBxcrEtCI68v/aeQwMDPX2TtZyIFcwMDD8P7G5yNKWi51jS3L836kdKqJiKuLi/xdPmRkY6KGi8X/3cnVxCWVRsVNFOc9aq1XEJf5f2y/Ow4cliCQEBHZnJFjLyDEwMMgLC3OzQoN7RXR4vI4BFwvLvqwkV2U1NTEJd0WV5dGhMgICvZ7uaQYm8sIijvLKa2LDVUXF4rX1J3p7YoleFhYWBgYGR3f3aw/uFxUWQgSZwYIKykqb9u69futWbWcbRLy2tfnj//8Tp0xZtnG9sooKAwODnoHBki2bFq9a+fzj57LmZuxJiIGBQUpCQllZWUJCAjmdCfDxKSsqKisry0hLQ0QkJSXV1dRkZWXU1dQE+EChISgoqK6mpqigoK6mJi8HCgP6AQDXu4jBgMK9mgAAAABJRU5ErkJggg==?w=1500"
                      alt="image"
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        display: "block",
                      }}
                      width={1500}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div
                  id="block-c5a351432e0940a0bc34f3d5f579082a"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “How do you buy units from the shop? Are they just part
                        of the UI or did the models appear? Do you have an
                        avatar to move around or is everything click and drag?”
                        says Riot Wrekz. “There were a bunch of fundamental
                        control schemes we needed to decide on early.”
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-afd81bfa17d64ba4a5264a10537ab2aa"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        There wasn’t really a UI at all at first, since most of
                        the early efforts went to making the prototype run.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-10a2236825a24673bb17357bf80b5165"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “In the beginning, we were trying to understand the game
                        through a series of debug messages printed in chat,”
                        says Riot Nullarbor.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-978d89d3b5ed4ec7abc6fe93e56ca7ab"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “We just broke stuff if it wasn’t going to be used in
                        the final version of TFT,” Riot Wrekz explains. “So when
                        we did make UI changes... well, we didn’t actually make
                        UI{" "}
                      </span>
                      <span>
                        <em>changes</em>
                      </span>
                      <span>
                        {" "}
                        during the prototype. We just demolished the League of
                        Legends UI and built what we wanted on top of the
                        smoking wreckage.”
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-3ce5997af16441dea6db29d7933b283c"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        <em>
                          Senior QA lead Alex “Riot Ranger XIV” Sherrell showing
                          off some very fancy new TFT UI.
                        </em>
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-af82136e147d4b8c98e4e422ad5c0005"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        Figuring out TFT’s basic UI forced the team to think
                        about how champions even arrived at players’ boards. And
                        some of the ideas were pretty... interesting.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-b31d773c53db4ebabde8cbf0ffe1509d"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “At some point we imagined that champions would arrive
                        on trains,” Riot Nullarbor recalls. “We’d have a little
                        train depot where it’d park with champions that you
                        could purchase.”
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-f16abd8d2350417db552dd0be2e9d5e8"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        Even though the image of Garen, Darius, and Warwick
                        politely sitting side-by-side waiting to be purchased
                        was oddly adorable, the idea quickly derailed. The
                        re-rolling function would require the trains to arrive
                        and depart quickly to keep games from taking too long.
                        And while supersonic trains rolling in and out of your
                        board would be a fun flex, the amount of resources it’d
                        require to run and animate would be too taxing.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-59a5731949934772a8f028edad6fdd89"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “We also explored having a town around the board that
                        would level up and get bigger the further you
                        progressed,” says Riot Wittrock. “Champions would sit on
                        the left side of your board in a little shop, and you’d
                        buy ’em by grabbing and throwing them onto the field.”
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-4faf0aec0942479da4931e4a37ba35a5"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        The team sadly ended up going for a different approach
                        for practical reasons...
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-d520bd9f3c834bb1bf063f9001c1e0f9"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>“League forces you to load into the game as </span>
                      <span>
                        <em>something</em>
                      </span>
                      <span>
                        ,” shares Riot Wittrock. “Early on we used Scuttle
                        because it was native to League.”
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-1a18f85a3cd645dca1c22b4f7cf711e4"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        Scuttle was a little crazy in the beginning. At one
                        point, you could pick up other Scuttles with your own
                        chad Scuttle and throw them around. Or you could pick
                        champions up from your bench mid-battle and dump them
                        into a Tahm Kench-shaped garbage can, showing your
                        opponent{" "}
                      </span>
                      <span>
                        <em>exactly</em>
                      </span>
                      <span> what you thought of their Assassin comp.</span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-fb142857cf5144f6b354809ab7873ca2"
                  className="notion-image page-width"
                >
                  <picture>
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/845a203e-ee9b-4542-9b04-4d85faf34c16.png?b=data:image/png;base64,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?w=750&f=webp"
                      media="(max-width: 546px)"
                      type="image/webp"
                    />
                    <source
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/845a203e-ee9b-4542-9b04-4d85faf34c16.png?b=data:image/png;base64,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?w=750"
                      media="(max-width: 546px)"
                    />
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/845a203e-ee9b-4542-9b04-4d85faf34c16.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAATCAIAAAB+9pigAAAACXBIWXMAAAsTAAALEwEAmpwYAAAG/UlEQVQ4jR3OW1NaiQEA4NOH7cxuM9NcG/ESg9wUIwqcAwjncDngAc45XIUDKjdFvCAkgnJLRMRLvERQLiZRJBjRkLia7GR32m07s9uXbTM7bR86bfrW9qUz+9yHTt/stDPfD/iAbKW6eXoaXl//rKkdtYkb3w3L7cgN+p1r9PY2DetWZ+stRuuVVhpb2ql1y5R2SEGJCJzP5LRdaaXdZrZBIJfZxWliMa/epfEwCURiDAH/VgerhU3nwaLlFzUgW6nmzl5PLGZuttNBUuNZtt5vrOORMeOYVT9iwTwWmV0nwJViYkBsM5hF/EEZqPe7YVLXq5Wr7PhUyOMMOI3jDiJAWaMuc8ypchH0Pn5TRwvptj1pnAHRwtZ6/ThzcEDvE8g0vZYJyjU3Fd9fnXmRmyllZvOL9vCY2mZWURa10651DOIOEzpsUzmtqN1KBcdLu0tLyzOBRdfzxsP9k6xnbsREKZq5PcAnP/LOzxXfXQDjmYXVWm1+J88G+X28NlfIenKRzYd0zG4ubMXJ6LQlPQvpUTqvi9PXdU8i7FfgQkjBZnF4kEACi4d1KiMm1RKCnaTul435kaANgpidUJ9QzCseVoweHzCVSqeflXlqSxuDQbtz3TNpLlXmNcM6z+p4+t1q9HzLlJ5GRz1ig1mMk0qdX4vOQ916RC0TITIpxKeMuvzD8fJqWKlXuccd4YBZCHVKVKAKFt8fdP705s+AUHYjd7ZZ+9o5HBSzoM7ZfDT/oXZx+eH08k+xn1fCb/fD9a3t85KcJFSGGXfgjUo6yeD323Tk6ubqnBb+6mHy+/fVv18UqofpP+67Pq7BXjPMAzv5UpAnga/cuAYki0V76H6iIj76fcCy/NC5lXTn077yChELJb7YffqPLyLnjx3JSR6Oq3SUVhe6ebv3ahNndJgqbyU2XY5vyuUXucJ4MPDkSfLyN77LH+JGCRsU0VFUMDji6uhiAKndggQ3sbSwYzNKzgXGdlMTx2vFv77J/e390b+/fX/55/Rfqs6dRLcao/eIRGrix1c6lGLNzuqDcHj62VLirLK7nt/cqjyfW4iFtIKUUYzIQT7YokHu+ScDjC4WEFsLhnOhld9VNz6+jvyinPr2IPHbauh8O/uHVyOHa5kPL+PfvTauxa53dKkIHahFu8GBgYA7l0puP85+2A5+X156elor1V/EVxa4QlG3qF/nsNxlNotFfRarRcgHgcKXxd1fZ8f2EobHD4zbSensGLkRG8jOeyvLhuJK6GLXvlXoc7nFFvX4FOW2ImJRf2jGsZO9v/PqMJJyP0lFDi7e5ar7xfrh0OykhCD60X5mB02Oakcoa3NbG/Bg2T1aHglUgoq4V5EO49mgZTOqTEe8pQRVzgw9SZFLkU4TKbMI0aApkzB/XQkshucPt+Kv3hyGYom9er1QPyrUq0/fnHgT0yICa+nooN36VK1GXC6XgUCBOxDMFnGIIGVa8arS/qlKlHwcwRcmkudJPBvmuZwsgrzK4Fxrbr8j7zcPG/5VncinH2Y21oovn++/qe+/OirUa4V6tXx6lNpdk5rx23fpTTc+wdSiAa2O28kCQMRwD4blJClExf7NocSXMdGcj1r2Jd7NYutBps/ZCklpHVwak9PS06NX2vf8oWcvcpWL16WT2l69Vq7Xiv9TLdZr65WSZcYHYarWNhqL1crj8ZqbaYBKA0pmMMN6ilyKbTfimUb4USN49nEp/rkfi1NMWHabweFI1O19MF2A2Cz6xcV4+fVJvnqQq1ZK9Vrp//3cUTV3dJg72h99FHHOhfRj7qYWWsvtz2i06wASoDQ7IWbY3T7u1dWLRjfpiZvCi17CgWmtWrYQZoskbESswDVzK5mVvYODs7O90+Pd09Kzi0rxZSV/9LTYeHl0Udk93ssdV0IrCbnboB+xSSChiN/D7WQAytisYDEBfPqTq2bM835L6h1gdnN7+yCjk5hw2ds43N7uHgYuWS+PfX78yGiwNio1fybp9VP//OH8fmoiHI/6I4++eZv46qxG+dxzCyHEYxQKGWZEplf0y+9xAP04aTjJI4XVy487/3kb4jhMPJA1aNPDoyrQjrZze2jNbciglY3BelzVi00NEm6VWs8Bu3OPIkbS1tXTp7PYg9SAy0V1S+Cunh6vy0HaFeJRA+wz3VVJAXfUvne6UP/VpsuOqRAQt6Fmi3LMR3GNkVYlBSJCFY7OuCJyFEGMBmy4DPUTXWxeIOjHUFPcF4XVkH7IqScQlMQUuF6mhkQyGWiQwwEbMmQETRpgetPztLFYO0vOrvrDy97lwkxsY1JJEO2C4RaBRkpoBBpUpNbAhE5hMdmHpiEhJrUYJQQu0g/AqFakx/oNOqlVN+Cy6cco44RL7jDAbqM17tdMWLtI5L8926Qc3gWTQQAAAABJRU5ErkJggg==?w=1500&f=webp"
                      type="image/webp"
                    />
                    <img
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/845a203e-ee9b-4542-9b04-4d85faf34c16.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAATCAIAAAB+9pigAAAACXBIWXMAAAsTAAALEwEAmpwYAAAG/UlEQVQ4jR3OW1NaiQEA4NOH7cxuM9NcG/ESg9wUIwqcAwjncDngAc45XIUDKjdFvCAkgnJLRMRLvERQLiZRJBjRkLia7GR32m07s9uXbTM7bR86bfrW9qUz+9yHTt/stDPfD/iAbKW6eXoaXl//rKkdtYkb3w3L7cgN+p1r9PY2DetWZ+stRuuVVhpb2ql1y5R2SEGJCJzP5LRdaaXdZrZBIJfZxWliMa/epfEwCURiDAH/VgerhU3nwaLlFzUgW6nmzl5PLGZuttNBUuNZtt5vrOORMeOYVT9iwTwWmV0nwJViYkBsM5hF/EEZqPe7YVLXq5Wr7PhUyOMMOI3jDiJAWaMuc8ypchH0Pn5TRwvptj1pnAHRwtZ6/ThzcEDvE8g0vZYJyjU3Fd9fnXmRmyllZvOL9vCY2mZWURa10651DOIOEzpsUzmtqN1KBcdLu0tLyzOBRdfzxsP9k6xnbsREKZq5PcAnP/LOzxXfXQDjmYXVWm1+J88G+X28NlfIenKRzYd0zG4ubMXJ6LQlPQvpUTqvi9PXdU8i7FfgQkjBZnF4kEACi4d1KiMm1RKCnaTul435kaANgpidUJ9QzCseVoweHzCVSqeflXlqSxuDQbtz3TNpLlXmNcM6z+p4+t1q9HzLlJ5GRz1ig1mMk0qdX4vOQ916RC0TITIpxKeMuvzD8fJqWKlXuccd4YBZCHVKVKAKFt8fdP705s+AUHYjd7ZZ+9o5HBSzoM7ZfDT/oXZx+eH08k+xn1fCb/fD9a3t85KcJFSGGXfgjUo6yeD323Tk6ubqnBb+6mHy+/fVv18UqofpP+67Pq7BXjPMAzv5UpAnga/cuAYki0V76H6iIj76fcCy/NC5lXTn077yChELJb7YffqPLyLnjx3JSR6Oq3SUVhe6ebv3ahNndJgqbyU2XY5vyuUXucJ4MPDkSfLyN77LH+JGCRsU0VFUMDji6uhiAKndggQ3sbSwYzNKzgXGdlMTx2vFv77J/e390b+/fX/55/Rfqs6dRLcao/eIRGrix1c6lGLNzuqDcHj62VLirLK7nt/cqjyfW4iFtIKUUYzIQT7YokHu+ScDjC4WEFsLhnOhld9VNz6+jvyinPr2IPHbauh8O/uHVyOHa5kPL+PfvTauxa53dKkIHahFu8GBgYA7l0puP85+2A5+X156elor1V/EVxa4QlG3qF/nsNxlNotFfRarRcgHgcKXxd1fZ8f2EobHD4zbSensGLkRG8jOeyvLhuJK6GLXvlXoc7nFFvX4FOW2ImJRf2jGsZO9v/PqMJJyP0lFDi7e5ar7xfrh0OykhCD60X5mB02Oakcoa3NbG/Bg2T1aHglUgoq4V5EO49mgZTOqTEe8pQRVzgw9SZFLkU4TKbMI0aApkzB/XQkshucPt+Kv3hyGYom9er1QPyrUq0/fnHgT0yICa+nooN36VK1GXC6XgUCBOxDMFnGIIGVa8arS/qlKlHwcwRcmkudJPBvmuZwsgrzK4Fxrbr8j7zcPG/5VncinH2Y21oovn++/qe+/OirUa4V6tXx6lNpdk5rx23fpTTc+wdSiAa2O28kCQMRwD4blJClExf7NocSXMdGcj1r2Jd7NYutBps/ZCklpHVwak9PS06NX2vf8oWcvcpWL16WT2l69Vq7Xiv9TLdZr65WSZcYHYarWNhqL1crj8ZqbaYBKA0pmMMN6ilyKbTfimUb4USN49nEp/rkfi1NMWHabweFI1O19MF2A2Cz6xcV4+fVJvnqQq1ZK9Vrp//3cUTV3dJg72h99FHHOhfRj7qYWWsvtz2i06wASoDQ7IWbY3T7u1dWLRjfpiZvCi17CgWmtWrYQZoskbESswDVzK5mVvYODs7O90+Pd09Kzi0rxZSV/9LTYeHl0Udk93ssdV0IrCbnboB+xSSChiN/D7WQAytisYDEBfPqTq2bM835L6h1gdnN7+yCjk5hw2ds43N7uHgYuWS+PfX78yGiwNio1fybp9VP//OH8fmoiHI/6I4++eZv46qxG+dxzCyHEYxQKGWZEplf0y+9xAP04aTjJI4XVy487/3kb4jhMPJA1aNPDoyrQjrZze2jNbciglY3BelzVi00NEm6VWs8Bu3OPIkbS1tXTp7PYg9SAy0V1S+Cunh6vy0HaFeJRA+wz3VVJAXfUvne6UP/VpsuOqRAQt6Fmi3LMR3GNkVYlBSJCFY7OuCJyFEGMBmy4DPUTXWxeIOjHUFPcF4XVkH7IqScQlMQUuF6mhkQyGWiQwwEbMmQETRpgetPztLFYO0vOrvrDy97lwkxsY1JJEO2C4RaBRkpoBBpUpNbAhE5hMdmHpiEhJrUYJQQu0g/AqFakx/oNOqlVN+Cy6cco44RL7jDAbqM17tdMWLtI5L8926Qc3gWTQQAAAABJRU5ErkJggg==?w=1500"
                      alt="image"
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        display: "block",
                      }}
                      width={1500}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div
                  id="block-1c6b775555424f72abc89f9150698655"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        <em>
                          There was also a bug where Scuttle grew exponentially,
                          eventually dwarfing Baron.
                        </em>
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-a989e19e32c24f609545d3e2e278251b"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        Although the crab-on-crab warfare went a little too far,
                        it added a layer of fun and interaction that the team
                        really liked, and thus Little Legends were (eventually)
                        born.
                      </span>
                    </span>
                  </p>
                </div>
                <h2
                  id="block-de412ccc3fb249bdba22e718fcf14aa2"
                  className="notion-heading"
                >
                  <span
                    className="notion-heading__anchor"
                    id="de412ccc3fb249bdba22e718fcf14aa2"
                  />
                  <span className="notion-semantic-string">
                    <span>Week 13: The Roster</span>
                  </span>
                </h2>
                <div
                  id="block-949c1d62df13420fbdbc9561d6bd6a2f"
                  className="notion-image page-width"
                >
                  <picture>
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/1355542b-c38d-4798-af25-07a3372f236f.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGUlEQVQokWNgwABMjIxwEg2gCTIxMmKK4NILAqxMTBxsbAwMDNzs7MiCfJycDAwMfJycEFkIm5mRkZmRkZeDAyLCy8HBwcbKhCSCbq04H/+1qqLtaYld7h7/ty6O1NSDyIrz8b/tqo/RMvBUVv85uZWZkdFSVvFRU6WqmPiCsNC/UzskePlkhYTfdtWbSMvV2Dr8n91rKauI4g8Iy1pO8f/Wxf+XTp0ZGOCmpNrm4gaRVReX+L90aomFTaqh6f+tiz1U1C9VFNxrKNeXlvm/ePL/tXMSdIwWhIX+n92rKS75tqv+/77V/mpaDAwMzGgBxcrENDMw4P/FvbszkvdnpVrLgVzBwMDw/8TmIktbLnaOLcnxf6d2qIiKqYiL/188ZWZgoIeKxv/dy9XFJZRFxU4V5TxrrVYRl/h/bb84Dx+WIJIQENieGm8nq9Dr6XGqKJuViQkiuyI6PF7HgIuFZV9WkquympqYhLuiyvLoUBkBgV5P9zQDE3lhEUd55TWx4aqiYvHa+hO9PbFELwsLCwMDg5O7+6V792JSUyGCzGBBBWWlTXv3Xr91q7azDSJe29r88f//iVOmLNu4XllFhYGBQc/AYMmWTYtXrXz+8XNZczP2JMTAwCAlIaGsrCwlKQl3PgMDgwAfn7KiorKysoy0NEREUlJSXU1NVlZGXU1NgA8UGoKCgupqaooKCupqavJycjgtoAUAAAWnjTF94ggtAAAAAElFTkSuQmCC?w=750&f=webp"
                      media="(max-width: 546px)"
                      type="image/webp"
                    />
                    <source
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/1355542b-c38d-4798-af25-07a3372f236f.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGUlEQVQokWNgwABMjIxwEg2gCTIxMmKK4NILAqxMTBxsbAwMDNzs7MiCfJycDAwMfJycEFkIm5mRkZmRkZeDAyLCy8HBwcbKhCSCbq04H/+1qqLtaYld7h7/ty6O1NSDyIrz8b/tqo/RMvBUVv85uZWZkdFSVvFRU6WqmPiCsNC/UzskePlkhYTfdtWbSMvV2Dr8n91rKauI4g8Iy1pO8f/Wxf+XTp0ZGOCmpNrm4gaRVReX+L90aomFTaqh6f+tiz1U1C9VFNxrKNeXlvm/ePL/tXMSdIwWhIX+n92rKS75tqv+/77V/mpaDAwMzGgBxcrENDMw4P/FvbszkvdnpVrLgVzBwMDw/8TmIktbLnaOLcnxf6d2qIiKqYiL/188ZWZgoIeKxv/dy9XFJZRFxU4V5TxrrVYRl/h/bb84Dx+WIJIQENieGm8nq9Dr6XGqKJuViQkiuyI6PF7HgIuFZV9WkquympqYhLuiyvLoUBkBgV5P9zQDE3lhEUd55TWx4aqiYvHa+hO9PbFELwsLCwMDg5O7+6V792JSUyGCzGBBBWWlTXv3Xr91q7azDSJe29r88f//iVOmLNu4XllFhYGBQc/AYMmWTYtXrXz+8XNZczP2JMTAwCAlIaGsrCwlKQl3PgMDgwAfn7KiorKysoy0NEREUlJSXU1NVlZGXU1NgA8UGoKCgupqaooKCupqavJycjgtoAUAAAWnjTF94ggtAAAAAElFTkSuQmCC?w=750"
                      media="(max-width: 546px)"
                    />
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/1355542b-c38d-4798-af25-07a3372f236f.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGUlEQVQokWNgwABMjIxwEg2gCTIxMmKK4NILAqxMTBxsbAwMDNzs7MiCfJycDAwMfJycEFkIm5mRkZmRkZeDAyLCy8HBwcbKhCSCbq04H/+1qqLtaYld7h7/ty6O1NSDyIrz8b/tqo/RMvBUVv85uZWZkdFSVvFRU6WqmPiCsNC/UzskePlkhYTfdtWbSMvV2Dr8n91rKauI4g8Iy1pO8f/Wxf+XTp0ZGOCmpNrm4gaRVReX+L90aomFTaqh6f+tiz1U1C9VFNxrKNeXlvm/ePL/tXMSdIwWhIX+n92rKS75tqv+/77V/mpaDAwMzGgBxcrENDMw4P/FvbszkvdnpVrLgVzBwMDw/8TmIktbLnaOLcnxf6d2qIiKqYiL/188ZWZgoIeKxv/dy9XFJZRFxU4V5TxrrVYRl/h/bb84Dx+WIJIQENieGm8nq9Dr6XGqKJuViQkiuyI6PF7HgIuFZV9WkquympqYhLuiyvLoUBkBgV5P9zQDE3lhEUd55TWx4aqiYvHa+hO9PbFELwsLCwMDg5O7+6V792JSUyGCzGBBBWWlTXv3Xr91q7azDSJe29r88f//iVOmLNu4XllFhYGBQc/AYMmWTYtXrXz+8XNZczP2JMTAwCAlIaGsrCwlKQl3PgMDgwAfn7KiorKysoy0NEREUlJSXU1NVlZGXU1NgA8UGoKCgupqaooKCupqavJycjgtoAUAAAWnjTF94ggtAAAAAElFTkSuQmCC?w=1500&f=webp"
                      type="image/webp"
                    />
                    <img
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/1355542b-c38d-4798-af25-07a3372f236f.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGUlEQVQokWNgwABMjIxwEg2gCTIxMmKK4NILAqxMTBxsbAwMDNzs7MiCfJycDAwMfJycEFkIm5mRkZmRkZeDAyLCy8HBwcbKhCSCbq04H/+1qqLtaYld7h7/ty6O1NSDyIrz8b/tqo/RMvBUVv85uZWZkdFSVvFRU6WqmPiCsNC/UzskePlkhYTfdtWbSMvV2Dr8n91rKauI4g8Iy1pO8f/Wxf+XTp0ZGOCmpNrm4gaRVReX+L90aomFTaqh6f+tiz1U1C9VFNxrKNeXlvm/ePL/tXMSdIwWhIX+n92rKS75tqv+/77V/mpaDAwMzGgBxcrENDMw4P/FvbszkvdnpVrLgVzBwMDw/8TmIktbLnaOLcnxf6d2qIiKqYiL/188ZWZgoIeKxv/dy9XFJZRFxU4V5TxrrVYRl/h/bb84Dx+WIJIQENieGm8nq9Dr6XGqKJuViQkiuyI6PF7HgIuFZV9WkquympqYhLuiyvLoUBkBgV5P9zQDE3lhEUd55TWx4aqiYvHa+hO9PbFELwsLCwMDg5O7+6V792JSUyGCzGBBBWWlTXv3Xr91q7azDSJe29r88f//iVOmLNu4XllFhYGBQc/AYMmWTYtXrXz+8XNZczP2JMTAwCAlIaGsrCwlKQl3PgMDgwAfn7KiorKysoy0NEREUlJSXU1NVlZGXU1NgA8UGoKCgupqaooKCupqavJycjgtoAUAAAWnjTF94ggtAAAAAElFTkSuQmCC?w=1500"
                      alt="image"
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        display: "block",
                      }}
                      width={1500}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div
                  id="block-69c795e024d04b1abed85169ae33fe3e"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “We viewed champions in TFT as little love letters to
                        their League counterparts,” says Riot Wrekz. “We wanted
                        to find a way to make the core thematic for each
                        champion shine through, even though we couldn’t use
                        every single one of their abilities.”
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-e61797ce37444d4bbc952c7e2daabd2d"
                  className="notion-image page-width"
                >
                  <picture>
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/820303ac-d676-4b6d-870f-c6b08a4d14b3.gif?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAASCAIAAAC1qksFAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAGsklEQVQ4jRWS6VNaBwLA+dYv24+b7Zha44GJmnjjidHYYjTRppoQTwaDF4cQHsd7gL7HJcfjBgGVByKgoAg+wBOJt6bZZNPZZtpO253pZKaz58zudPbD7pfddce/4Pf7zfwINTXElrt3yPU3a6oKim9ltd9vkoAiATApkwimZBAoEkxy2IN9fcyJCYDPRyARJOI9o9Nds446UmFR4Ufl5bkVlXmV1fnl5bnFd/Kysn+dQ8y+dv3aDeJ1YnFOVu51Arn+ZtntHGL+tZJb1wvzr/V0dxhRM4vF4T0HtDoUhpUajR6GFShqMJssOh1qNFp0Or0BNQD0LmCoHaI/nB5/AtEedDbfobSWFub/Jjvrw+ysD4tK8sl3SQ9aqwikqjxSxY3qiht1pILa6rzuR20KGJmCxHoVAosBBBLplIgcEgl4LAGfh8gkWo1aKUcgkWBFxc0YhF8FDT+uW9+FdJKhjrvkktLij3/1AeEDAuGTvI/LqiufdlGuAC3k4qbGWw21RHL9TSajS8bswe2ClGsaXzScR4w/JtAvo46dZWfcAcZswqhN7NdxEHYPyqMmdNxZ8ZBwpEPKevS0s7aFXDI80EaqyCXXF5LKPiktzmqqv0VorCW2NhXXkQpqqvLpQ/dR+cgCPHzolcxrAK1c6rdI/GpmeMGSWlvCPUjKCaUc4GlAu2YBdueRf5zFjublPoThlY9yeu81VOZyWd19Pc0t5OIWcnFtDbGmKp/QUEtsqCXWkQo+bb4jl9JlPGpEzz32wetGtl9BByZHqU+octaVL3uMxh7+/DmtTSEcjmKWJVTshHpDOu77TGTfBUtplI46IvVxMwzSG2oL60gFdaQCcmMRoaG2sLoit7I0p7urAQaH1Jzu3TlwH4MDbuOiQ2OGaCg0jIjZGikPoD+Y7G8d6KboJWOLOsDrtCa8xohLg89K9NwnwBClvbGknkSUS2iPuxo+ay5raiwqu51zVVBHKmhtus1idALjXdLRTr9m1KsHAm5bBLM6kTEbzJRwachzmoo/6FbzlCB7zTK14tShKuUOZrhYc6U900szLNn4I0YPubokmz/5WCVjdLWTrq6pyieUFmeTKvK+eFgnE/ZBbKpTzbMrWVb5uBuhowohanToEKFT0muRMkZHxqz6GRWL6oTHEt5ZvxVNOcCA6llmUfM+E47bJQj7c+pnFfcpVWY1mzFAqanKvyp4Rmvns7ph0aAGHvabBEfr9s2ILehzRvwuL2ZSqyRW64xUwDCpBQ4lEHXNnIcsZ5ghiZncKLwVtJ/GPC9TnoMVY8gJO1QT0tHOyqJsnxNcxmR8VjflXjkBnOFoYDrmFKoh2ryOF8XkQUyLLYWicXw74TPpRHqbniebXvA7bVPPMPnIWdT/fi++bJXDEk46nfjpu7d/+PrMaZ+2miWYWYgC/W21NwE+9SztXMZkIJdK4IsHlBK6enpYDvT6zALMCIR8aCoVWo17Mczi8TqxkNu74jn43UlkPbAenot69S+WDC9Twd1Y8OTi8PjV0dHJ1vl2+JujeGxBYYYGeymVD+9XhzAEc4BK8SDBoBy3oRw5ODjFpXqMfLeBH8JUmANajsy9+O3bo/OTzE4wjbsP3hzvHL7YO9xzzaEKCf2rw43fH2xmdtdTCf/amuubk9R/3p2+xjET1A/R2sg1BQCPakcBPusJQaeYsKHccXoH/HwAM4rdJmk44klshuLpI4XSvJqMpw/xaBQ7ON5aWZkPbyxH9ra2kys7+OJGwLabCuzE59NJ7/GL+MVWcCdkdcF0bHqI2lo21N+6GzUs2ESEGXgEAYcYvW06KdOEcDC7ZjOZ2t/b1muRoc5PPR7L4emhyx8I4UseBxRcsm0d7vz8KhNZMAuYfVFMu7Hq3V717W8GTUqmc4YV1DHVnO6RnnuU1spkRKtVMQnGGc4orX1i4CEqY86AIws+80o64k1hSr0QVnGTmdjx6fEKjm+m15YxVTjijuAxPB7eSa6Y7Cgeww7P0hur/u1kyO9GMqsGu2J0/+0fv/3z5V//e/nTPy917lWCHKQ+aLktGHusFDMUghGRmdk3/wXd/VS7pQ6cBQIpv1wLuOfQi9cn+xn86NVJKGSd1qpdvtlQaGFrBz8/39qM2PCwLbMZ/NPrRALTRPffXXz9lzff/+vN9/9WWfwELODhCsS88V5wjCpg90OqEdDyVOAciX8ZwU9xi1sPcPtRrfT0/CCd3j69OA57FDzOqH1Wi5nBSHBuPTyH+1T40kw6Nvfzy2TMrTn/9pcf/nb59/9d/nJ5aV1M/h+aWEXNGoL5TgAAAABJRU5ErkJggg==?w=750&f=webp"
                      media="(max-width: 546px)"
                      type="image/webp"
                    />
                    <source
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/820303ac-d676-4b6d-870f-c6b08a4d14b3.gif?b=data:image/png;base64,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?w=750"
                      media="(max-width: 546px)"
                    />
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/820303ac-d676-4b6d-870f-c6b08a4d14b3.gif?b=data:image/png;base64,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?w=1500&f=webp"
                      type="image/webp"
                    />
                    <img
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/820303ac-d676-4b6d-870f-c6b08a4d14b3.gif?b=data:image/png;base64,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?w=1500"
                      alt="image"
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        display: "block",
                      }}
                      width={1500}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div
                  id="block-dd15b7e726ca4ea183fd41b66d3da345"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “We didn’t want to just use the ults for every
                        champion,” adds Kilmourz. “Take Braum, for instance.
                        You’d expect him to just do his ult, but the most iconic
                        thing about Braum is probably his shield.”
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-3d28b259c85842ed8c3892ed9c87d53d"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        The team generally had an easy time simplifying each
                        champion, which sometimes meant using multiple
                        abilities, like Lucian’s dash and double shot. But
                        grouping champions into categories for traits was a bit
                        more difficult.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-9ec851c56ee24a1e94fac76601f63eaa"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “We’ve tried for so many years to make champions feel
                        really unique,” Riot Wittrock explains. “Which is great
                        for League of Legends! But we ran into problems when
                        trying to group them for TFT.”
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-073be89769bf4bb5850cade2a1d848e4"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        Factions and origins stood out as the obvious
                        categories.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-ab837e2a53b348ceb792726305f83021"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “When we started splitting champions up into their
                        factions, we realized it didn’t always make perfect
                        sense,” Riot Wrekz admits. “Garen is from Demacia,
                        Darius is from Noxus, sure. But then you have champs
                        like Janna... It’s not exactly clear that she’s from
                        Zaun. We started to run into so many edge cases that
                        just didn’t make a lot of sense.”
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-b5b44ebbc4f949c09c168e0048fe783e"
                  className="notion-image page-width"
                >
                  <picture>
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/109e6302-9e3a-4290-b8c5-c94ba25929aa.png?b=data:image/png;base64,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?w=750&f=webp"
                      media="(max-width: 546px)"
                      type="image/webp"
                    />
                    <source
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/109e6302-9e3a-4290-b8c5-c94ba25929aa.png?b=data:image/png;base64,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?w=750"
                      media="(max-width: 546px)"
                    />
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/109e6302-9e3a-4290-b8c5-c94ba25929aa.png?b=data:image/png;base64,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?w=1500&f=webp"
                      type="image/webp"
                    />
                    <img
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/109e6302-9e3a-4290-b8c5-c94ba25929aa.png?b=data:image/png;base64,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?w=1500"
                      alt="image"
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        display: "block",
                      }}
                      width={1500}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <ol type={1} className="notion-numbered-list">
                  <li
                    id="block-5d3c8ce29a1543bbb1efc085d5b5017c"
                    className="notion-list-item"
                  >
                    <span className="notion-semantic-string">
                      <span>
                        The champions, synergies, and origins changed slightly
                        every day to make everything feel more cohesive.
                      </span>
                    </span>
                  </li>
                </ol>
                <div
                  id="block-3c32ba5371c8430f88d86d607ccf7782"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “An important learning moment was when we realized we
                        could lean into League’s alternate universes,” says Riot
                        Wittrock. “We ended up going with a pretty subtle
                        approach, but exploring universes helped us make
                        groupings that made more sense and felt thematically
                        appropriate.”
                      </span>
                    </span>
                  </p>
                </div>
                <h2
                  id="block-900b39bffec741ce8166d3aebac98ba6"
                  className="notion-heading"
                >
                  <span
                    className="notion-heading__anchor"
                    id="900b39bffec741ce8166d3aebac98ba6"
                  />
                  <span className="notion-semantic-string">
                    <span>Week 12: FIGHT!</span>
                  </span>
                </h2>
                <div
                  id="block-3cb7f5ad103248848ee3c4c4d288c3f5"
                  className="notion-image page-width"
                >
                  <picture>
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/bf5674f1-0814-4812-9019-0ca4ff27fbd1.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVQokWNgwAGYGBkJCjIxMmKK4NILApwsLBxsbMyMjPxcXHBBViYmPk5OBgYGPk5ODjY2iCAfJyczIyMzIyMvBwdEhJeDg4ONlQlJBB0I8/CeK807VZSjKCL6qKkyQccQIi7Ox/+2qz5Gy8BTWf3n5FZmRkZLWcVHTZWqYuILwkL/Tu2Q4OWTFRJ+21VvIi1XY+vwf3avpawiij+YwSx3RdX/B9b+ndqhLy3zf27/JG9viKy6uMT/pVNLLGxSDU3/b13soaJ+qaLgXkM5SNniyf/XzknQMVoQFvp/dq+muOTbrvr/+1b7q2nBjUVY0OXu8f/A2nddDdKCQv8Pr7WUlYfI/j+xucjSloudY0ty/N+pHSqiYiri4v8XT5kZGOihovF/93J1cQllUbFTRTnPWqtVxCX+X9svzsOHJep0paSftlToS0i6K6oczk1nZWKCyK6IDo/XMeBiYdmXleSqrKYmJuGuqLI8OlRGQKDX0z3NwEReWMRRXnlNbLiqqFi8tv5Eb08sEcDCwsLAwODo7n7twf34tDSoz8CCCspKm/buvX7rVm1nG0S8trX54///E6dMWbZxvbKKCgMDg56BwZItmxavWvn84+ey5mbskczAwCAlIaGsrCwpKQl3PgMDgwAfn7KiorKysoy0NEREUlJSXU1NVlZGXU1NgA8UGoKCgupqaooKCupqavJycjgtoAUAAF26jiT8ZcNPAAAAAElFTkSuQmCC?w=750&f=webp"
                      media="(max-width: 546px)"
                      type="image/webp"
                    />
                    <source
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/bf5674f1-0814-4812-9019-0ca4ff27fbd1.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVQokWNgwAGYGBkJCjIxMmKK4NILApwsLBxsbMyMjPxcXHBBViYmPk5OBgYGPk5ODjY2iCAfJyczIyMzIyMvBwdEhJeDg4ONlQlJBB0I8/CeK807VZSjKCL6qKkyQccQIi7Ox/+2qz5Gy8BTWf3n5FZmRkZLWcVHTZWqYuILwkL/Tu2Q4OWTFRJ+21VvIi1XY+vwf3avpawiij+YwSx3RdX/B9b+ndqhLy3zf27/JG9viKy6uMT/pVNLLGxSDU3/b13soaJ+qaLgXkM5SNniyf/XzknQMVoQFvp/dq+muOTbrvr/+1b7q2nBjUVY0OXu8f/A2nddDdKCQv8Pr7WUlYfI/j+xucjSloudY0ty/N+pHSqiYiri4v8XT5kZGOihovF/93J1cQllUbFTRTnPWqtVxCX+X9svzsOHJep0paSftlToS0i6K6oczk1nZWKCyK6IDo/XMeBiYdmXleSqrKYmJuGuqLI8OlRGQKDX0z3NwEReWMRRXnlNbLiqqFi8tv5Eb08sEcDCwsLAwODo7n7twf34tDSoz8CCCspKm/buvX7rVm1nG0S8trX54///E6dMWbZxvbKKCgMDg56BwZItmxavWvn84+ey5mbskczAwCAlIaGsrCwpKQl3PgMDgwAfn7KiorKysoy0NEREUlJSXU1NVlZGXU1NgA8UGoKCgupqaooKCupqavJycjgtoAUAAF26jiT8ZcNPAAAAAElFTkSuQmCC?w=750"
                      media="(max-width: 546px)"
                    />
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/bf5674f1-0814-4812-9019-0ca4ff27fbd1.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVQokWNgwAGYGBkJCjIxMmKK4NILApwsLBxsbMyMjPxcXHBBViYmPk5OBgYGPk5ODjY2iCAfJyczIyMzIyMvBwdEhJeDg4ONlQlJBB0I8/CeK807VZSjKCL6qKkyQccQIi7Ox/+2qz5Gy8BTWf3n5FZmRkZLWcVHTZWqYuILwkL/Tu2Q4OWTFRJ+21VvIi1XY+vwf3avpawiij+YwSx3RdX/B9b+ndqhLy3zf27/JG9viKy6uMT/pVNLLGxSDU3/b13soaJ+qaLgXkM5SNniyf/XzknQMVoQFvp/dq+muOTbrvr/+1b7q2nBjUVY0OXu8f/A2nddDdKCQv8Pr7WUlYfI/j+xucjSloudY0ty/N+pHSqiYiri4v8XT5kZGOihovF/93J1cQllUbFTRTnPWqtVxCX+X9svzsOHJep0paSftlToS0i6K6oczk1nZWKCyK6IDo/XMeBiYdmXleSqrKYmJuGuqLI8OlRGQKDX0z3NwEReWMRRXnlNbLiqqFi8tv5Eb08sEcDCwsLAwODo7n7twf34tDSoz8CCCspKm/buvX7rVm1nG0S8trX54///E6dMWbZxvbKKCgMDg56BwZItmxavWvn84+ey5mbskczAwCAlIaGsrCwpKQl3PgMDgwAfn7KiorKysoy0NEREUlJSXU1NVlZGXU1NgA8UGoKCgupqaooKCupqavJycjgtoAUAAF26jiT8ZcNPAAAAAElFTkSuQmCC?w=1500&f=webp"
                      type="image/webp"
                    />
                    <img
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/bf5674f1-0814-4812-9019-0ca4ff27fbd1.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVQokWNgwAGYGBkJCjIxMmKK4NILApwsLBxsbMyMjPxcXHBBViYmPk5OBgYGPk5ODjY2iCAfJyczIyMzIyMvBwdEhJeDg4ONlQlJBB0I8/CeK807VZSjKCL6qKkyQccQIi7Ox/+2qz5Gy8BTWf3n5FZmRkZLWcVHTZWqYuILwkL/Tu2Q4OWTFRJ+21VvIi1XY+vwf3avpawiij+YwSx3RdX/B9b+ndqhLy3zf27/JG9viKy6uMT/pVNLLGxSDU3/b13soaJ+qaLgXkM5SNniyf/XzknQMVoQFvp/dq+muOTbrvr/+1b7q2nBjUVY0OXu8f/A2nddDdKCQv8Pr7WUlYfI/j+xucjSloudY0ty/N+pHSqiYiri4v8XT5kZGOihovF/93J1cQllUbFTRTnPWqtVxCX+X9svzsOHJep0paSftlToS0i6K6oczk1nZWKCyK6IDo/XMeBiYdmXleSqrKYmJuGuqLI8OlRGQKDX0z3NwEReWMRRXnlNbLiqqFi8tv5Eb08sEcDCwsLAwODo7n7twf34tDSoz8CCCspKm/buvX7rVm1nG0S8trX54///E6dMWbZxvbKKCgMDg56BwZItmxavWvn84+ey5mbskczAwCAlIaGsrCwpKQl3PgMDgwAfn7KiorKysoy0NEREUlJSXU1NVlZGXU1NgA8UGoKCgupqaooKCupqavJycjgtoAUAAF26jiT8ZcNPAAAAAElFTkSuQmCC?w=1500"
                      alt="image"
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        display: "block",
                      }}
                      width={1500}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div
                  id="block-f5f0e15c84f14965a263e90307aa20a0"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “We really liked the buying and planning phases in
                        autobattlers,” explains Riot Wittrock. “But the combat
                        tended to be this zoomed-out view with a lot of spell
                        effects going off, making things difficult to
                        understand. We really wanted to improve on that.”
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-f7a72fbe16fa42a49cc36eb8cb8d26f1"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        The plan? Make combat as exciting as possible without
                        sacrificing clarity.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-95d2cf52b320454183a0cd70ca77bd1d"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “We wanted it to feel like you’re observing a Bronze
                        teamfight,” Riot Wittrock shares. “It’s a bunch of
                        people casting their spells in a way that kind of makes
                        sense, but it’s not like watching Diamond players. It
                        feels like a League teamfight, just... a little wrong.”
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-02ca11101a6945119ac0d4abc941982e"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “We wanted to avoid the cloud of visual effects and
                        particles that we saw elsewhere,” says Riot MapleNectar.
                        “At first, it{" "}
                      </span>
                      <span>
                        <em>was</em>
                      </span>
                      <span>
                        {" "}
                        hard to see what was going on underneath 18 champions
                        casting abilities, so we needed to spend time cleaning
                        things up.”
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-b1cb36c7f6f24edb9af1fcf9b5489bb4"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        In addition to cutting back on some of the VFX, the team
                        found some other unique ways to increase visual clarity.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-65cbe3848c7347a0bb20d393fbbaa1c1"
                  className="notion-image page-width"
                >
                  <picture>
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/8a362f0e-101d-4ba5-8365-c27e4ff65184.gif?b=data:image/png;base64,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?w=750&f=webp"
                      media="(max-width: 546px)"
                      type="image/webp"
                    />
                    <source
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/8a362f0e-101d-4ba5-8365-c27e4ff65184.gif?b=data:image/png;base64,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?w=750"
                      media="(max-width: 546px)"
                    />
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/8a362f0e-101d-4ba5-8365-c27e4ff65184.gif?b=data:image/png;base64,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?w=1500&f=webp"
                      type="image/webp"
                    />
                    <img
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/8a362f0e-101d-4ba5-8365-c27e4ff65184.gif?b=data:image/png;base64,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?w=1500"
                      alt="image"
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        display: "block",
                      }}
                      width={1500}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div
                  id="block-68b6ed921ce94d2f937562fd6afea06c"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        <em>
                          Initial animation speeds were a little too quick.
                        </em>
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-ffc859a875a047faae6a4beb92f621e9"
                  className="notion-image page-width"
                >
                  <picture>
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/299468b3-498e-4832-ac69-25824a52b252.gif?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAXCAIAAADlZ9q2AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAIdElEQVRIiSXS+U9bhwHAcW+KeiQpJJCCgXCY5/d8PN/28wE2GNv4Bt+3wTbGBpwQYtJAmnIlAYITHPzwA4NfjAEPQ9zZNAfZpHVTq05aJ23TpE7afui6Hya101R10ib1x3mq9hd8Pz98Ce82vXWedKVGRK9pvFBLfPtKa83llgvyOyMBdIEj4UJMmM7n0AQcJsKl8DlmvdiqF9GZNIGAjSAcBGHzuXSFXhrJLdtW73RoeDVN5wg/IhAun3uD3XmR3HS+9RLhYnNtLfH8G1Swjtbe0PHOJSpRGNRFCpkQnvBiLsfeoB13OLYdnm23H/c6cVOw4Azv+F27Pmfe6dx1+PZsge2h8N66B3+UfbXnWjbNobeOj/E2hPxOw/ma5lpCPVB/kdzyBpNeB9WRdAA4KIgV0evl41B2wYjR1VuQEoV6UFCJkXU7FN0OqM5CPU+hnhy1Pw3JUmR5ql2XojmS7wkDQ1qTgSzsUJg0gZGomM+2ipAPFFJCM1TfADZegUn1QEOnnmp7GIi/LN0+OxvNxb0l2JIT6nZgNUqyHJLdJzw9zpKnGbJdqvmEYSuyTTlYh3E0GGhL+pTXrxERRm1L7blLP77UUtfR3iIFSJhWQmhsvXzx8rk64pu1jeeJcFPXeGj8pHD75YvgU4v1COx7QtWHeQ/XzHcWu6xJ0JSlDqbpmiRdjYG2ItNdYvlLAt8Jy4vbY8+Krq1NfzrqnGNCYjLP2yJqrhO0NRMAbUNN01vna968UHuuU8oxLN0dL+7HCjnnE5Uah3TLsCLEvrU5HE6Yzau9pgWTcdU0sNHX95Ql22VJd8maI8iWg/1pxdhhJpDLDWXvG7xKLsJsszdeaq+hsykEXQ4Wx4EmyhVE1upYiXkzaLRYiO499mESLc6Qp6EejKx4LBzABZY8okYRaRoR5tj9BU5Pjs3CKHy8U4JC+rAkgE97D+7bHiUlDgvIJ9V01E1en+qRdxEMW1RPhuGcZ08sC/zojDuDjR7uT+xPWY4ATZam22H0pmAlBhoLVH+F494XmDDEkGFoc6Aap8jSlP4ss+cJs+c2zZsP6fcd4iWldSMmCwkuEd+6Sm5q7GwiRNZ4Nze7YweiSAZxJme8udydUj5d1FiPafosX5GCFRmqPAXpdmi2I4a7wvUcCVxHbG0WNmwxlGlm3wa9f4Nu/ynoP/Lcen3qPJ5Q5/oFkwIiiwgaQFDXTPDP8Szz/MEb0NiOP3i4fa1yGCse2jHNQA7S4pDmhzVp0jSlD2f277KMecjzgjl0ILBuSdQoR4VS1BhV95Tiy3GdacXts9Lip7+2JO/CWnJ/gGOaleg3uQQR3KRUAlLBFeO1gfc/efXeWSWU3dAv9ajXmLoEW50QyjGGLMfsyrLUW0wNBioxsD8F65ISbVKsw6iaLUiJUftRmmmZP/WT9MzL07FCHrZI64jnAH4L1AcQ+GBDF7dJKgedK7PzH1fG8tvB7G33Cc9d4Bp2eL27LA3O0OdY1iO+/0hg2RVpMUSNMU15tqck9p6IHE8RPSZUY3x9lhbYm57Y31765IVv831uRNSzpIRjJIJQ2BKMU8Prtmgxe724Fc5vR3eC0WPxyJ7Kk1a5UkodBhoPmxwVwFOiWXNMI8b9AZ4j2iodzgrFVYAHd9h6jK3GG5179uh+JlbEoodpeyZkzXv7cCHBvcgITPIccwZfdmu8gIbz6LXt6QhqH8aN47g1iNlDBfvQgdlzYA6WrGMVZxT3jBy7hksOR97oKg4En1vHDxzRHftwacCPj0fyWPQA9WefOHNKQ0qlzvgJk8O9iArphEH9uEUxYdQs3Jw8Ow4eHihn/er5yHtnH87/6uMJPB0//TB+Wr5eLo8XC7FnJzeen8ZPy9OvT6den42Vj2++fh6rPIuV8AD+0J9eiuQeaR9oRL7WgVtygl0l43cSbQq6Wd0uYHUOTYZn9h7ePca1C+PaucmZ07Jrc02opLpXFwJ7u8PpjSEccyYTw5ntYGE3coC+//Hr6RfH08/yH/zio2D6wVQRjeQTkcOEcSEIiFt0HiHhhrEt2k0J01sHGuvtAGlyULGYuDW5shjEUlPl/MjGY/vmqnl6LJC4Z9tKjKdRRyrhWH8QXH9gy6yF0bX4s1Qkvzaauh/58Jp1edC7EHQlnJ71wf6okCIhMfV0QnQGCM33qoxXNX52YNZlHkW8D62WOy71qsH5ODK0GHevBaNr8dFHU0E0rouHHSsjtvmhidVIdMU9vjg6u+YILZr9sxHfikI3wQnPzn70m79/9NmXlc+++tnvvptL5gkDq1ztCk+zKjSuic0LXYMzKvNSt/EuqzsGSUWM7l4JLJNIjUKFBRGb+wajHraS5Z3QyAa6Gd38Ng6NJuY542rDnNx0XysbY+df/fbr/1b/8q/qn7+rflOt4uXPCZ5N8fA9UfieMLDAvf5QNL3dFVrgWiflurBc0iXmIZxmoJ0tBng95Bagg9/VC7AY3RoyV9BOZ4P1HcRW4EogRuuOQSoUkC7XZ1/98st/V//4TfUPX1f/9n0VPf6E4C0ILFs82wnDWoCt63BoQoIM0qDZl9PrL9HSzwVSOfhuu1KqEUq7iY0ksXwoGlrvbKwzIGSZAOKSm27IyLiXZ+aDyDRPukzCX3/61/9U//TP6hf/qH71/0CgInQdcX0lrq8kcJUZgT2xwEppNiWFxjmDdUIs11OpCCRQwVx+WxsNInO72Doe1K7vFYp5VBbpXT1wdV7U6ZRR1Q94qiQJLb/86vvq77+pfvFt9dtqNVP+nOB6xR6uCHw5RJdGTE8R9xmLY+8AQLCdLWim8Kk8mM6GWzo6yVSAwYXJFFoz0E5jUmh0AABbQRiAYTK1rYF1tbF/kanyMc0jo/fShzeXn8wmsAReHp2e/R8umCecmxk8uQAAAABJRU5ErkJggg==?w=750&f=webp"
                      media="(max-width: 546px)"
                      type="image/webp"
                    />
                    <source
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/299468b3-498e-4832-ac69-25824a52b252.gif?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAXCAIAAADlZ9q2AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAIdElEQVRIiSXS+U9bhwHAcW+KeiQpJJCCgXCY5/d8PN/28wE2GNv4Bt+3wTbGBpwQYtJAmnIlAYITHPzwA4NfjAEPQ9zZNAfZpHVTq05aJ23TpE7afui6Hya101R10ib1x3mq9hd8Pz98Ce82vXWedKVGRK9pvFBLfPtKa83llgvyOyMBdIEj4UJMmM7n0AQcJsKl8DlmvdiqF9GZNIGAjSAcBGHzuXSFXhrJLdtW73RoeDVN5wg/IhAun3uD3XmR3HS+9RLhYnNtLfH8G1Swjtbe0PHOJSpRGNRFCpkQnvBiLsfeoB13OLYdnm23H/c6cVOw4Azv+F27Pmfe6dx1+PZsge2h8N66B3+UfbXnWjbNobeOj/E2hPxOw/ma5lpCPVB/kdzyBpNeB9WRdAA4KIgV0evl41B2wYjR1VuQEoV6UFCJkXU7FN0OqM5CPU+hnhy1Pw3JUmR5ql2XojmS7wkDQ1qTgSzsUJg0gZGomM+2ipAPFFJCM1TfADZegUn1QEOnnmp7GIi/LN0+OxvNxb0l2JIT6nZgNUqyHJLdJzw9zpKnGbJdqvmEYSuyTTlYh3E0GGhL+pTXrxERRm1L7blLP77UUtfR3iIFSJhWQmhsvXzx8rk64pu1jeeJcFPXeGj8pHD75YvgU4v1COx7QtWHeQ/XzHcWu6xJ0JSlDqbpmiRdjYG2ItNdYvlLAt8Jy4vbY8+Krq1NfzrqnGNCYjLP2yJqrhO0NRMAbUNN01vna968UHuuU8oxLN0dL+7HCjnnE5Uah3TLsCLEvrU5HE6Yzau9pgWTcdU0sNHX95Ql22VJd8maI8iWg/1pxdhhJpDLDWXvG7xKLsJsszdeaq+hsykEXQ4Wx4EmyhVE1upYiXkzaLRYiO499mESLc6Qp6EejKx4LBzABZY8okYRaRoR5tj9BU5Pjs3CKHy8U4JC+rAkgE97D+7bHiUlDgvIJ9V01E1en+qRdxEMW1RPhuGcZ08sC/zojDuDjR7uT+xPWY4ATZam22H0pmAlBhoLVH+F494XmDDEkGFoc6Aap8jSlP4ss+cJs+c2zZsP6fcd4iWldSMmCwkuEd+6Sm5q7GwiRNZ4Nze7YweiSAZxJme8udydUj5d1FiPafosX5GCFRmqPAXpdmi2I4a7wvUcCVxHbG0WNmwxlGlm3wa9f4Nu/ynoP/Lcen3qPJ5Q5/oFkwIiiwgaQFDXTPDP8Szz/MEb0NiOP3i4fa1yGCse2jHNQA7S4pDmhzVp0jSlD2f277KMecjzgjl0ILBuSdQoR4VS1BhV95Tiy3GdacXts9Lip7+2JO/CWnJ/gGOaleg3uQQR3KRUAlLBFeO1gfc/efXeWSWU3dAv9ajXmLoEW50QyjGGLMfsyrLUW0wNBioxsD8F65ISbVKsw6iaLUiJUftRmmmZP/WT9MzL07FCHrZI64jnAH4L1AcQ+GBDF7dJKgedK7PzH1fG8tvB7G33Cc9d4Bp2eL27LA3O0OdY1iO+/0hg2RVpMUSNMU15tqck9p6IHE8RPSZUY3x9lhbYm57Y31765IVv831uRNSzpIRjJIJQ2BKMU8Prtmgxe724Fc5vR3eC0WPxyJ7Kk1a5UkodBhoPmxwVwFOiWXNMI8b9AZ4j2iodzgrFVYAHd9h6jK3GG5179uh+JlbEoodpeyZkzXv7cCHBvcgITPIccwZfdmu8gIbz6LXt6QhqH8aN47g1iNlDBfvQgdlzYA6WrGMVZxT3jBy7hksOR97oKg4En1vHDxzRHftwacCPj0fyWPQA9WefOHNKQ0qlzvgJk8O9iArphEH9uEUxYdQs3Jw8Ow4eHihn/er5yHtnH87/6uMJPB0//TB+Wr5eLo8XC7FnJzeen8ZPy9OvT6den42Vj2++fh6rPIuV8AD+0J9eiuQeaR9oRL7WgVtygl0l43cSbQq6Wd0uYHUOTYZn9h7ePca1C+PaucmZ07Jrc02opLpXFwJ7u8PpjSEccyYTw5ntYGE3coC+//Hr6RfH08/yH/zio2D6wVQRjeQTkcOEcSEIiFt0HiHhhrEt2k0J01sHGuvtAGlyULGYuDW5shjEUlPl/MjGY/vmqnl6LJC4Z9tKjKdRRyrhWH8QXH9gy6yF0bX4s1Qkvzaauh/58Jp1edC7EHQlnJ71wf6okCIhMfV0QnQGCM33qoxXNX52YNZlHkW8D62WOy71qsH5ODK0GHevBaNr8dFHU0E0rouHHSsjtvmhidVIdMU9vjg6u+YILZr9sxHfikI3wQnPzn70m79/9NmXlc+++tnvvptL5gkDq1ztCk+zKjSuic0LXYMzKvNSt/EuqzsGSUWM7l4JLJNIjUKFBRGb+wajHraS5Z3QyAa6Gd38Ng6NJuY542rDnNx0XysbY+df/fbr/1b/8q/qn7+rflOt4uXPCZ5N8fA9UfieMLDAvf5QNL3dFVrgWiflurBc0iXmIZxmoJ0tBng95Bagg9/VC7AY3RoyV9BOZ4P1HcRW4EogRuuOQSoUkC7XZ1/98st/V//4TfUPX1f/9n0VPf6E4C0ILFs82wnDWoCt63BoQoIM0qDZl9PrL9HSzwVSOfhuu1KqEUq7iY0ksXwoGlrvbKwzIGSZAOKSm27IyLiXZ+aDyDRPukzCX3/61/9U//TP6hf/qH71/0CgInQdcX0lrq8kcJUZgT2xwEppNiWFxjmDdUIs11OpCCRQwVx+WxsNInO72Doe1K7vFYp5VBbpXT1wdV7U6ZRR1Q94qiQJLb/86vvq77+pfvFt9dtqNVP+nOB6xR6uCHw5RJdGTE8R9xmLY+8AQLCdLWim8Kk8mM6GWzo6yVSAwYXJFFoz0E5jUmh0AABbQRiAYTK1rYF1tbF/kanyMc0jo/fShzeXn8wmsAReHp2e/R8umCecmxk8uQAAAABJRU5ErkJggg==?w=750"
                      media="(max-width: 546px)"
                    />
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/299468b3-498e-4832-ac69-25824a52b252.gif?b=data:image/png;base64,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?w=1500&f=webp"
                      type="image/webp"
                    />
                    <img
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/299468b3-498e-4832-ac69-25824a52b252.gif?b=data:image/png;base64,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?w=1500"
                      alt="image"
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        display: "block",
                      }}
                      width={1500}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div
                  id="block-61e72b1946ee489f88af5cc613d17fed"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        <em>Slowed down animations.</em>
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-dc4d56a2eff947348b2454903e6d3b81"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        <em>
                          “A lot of the animations in League are super fast,”
                          explains Kilmourz. “Spellcasting is all about feeling
                          responsive and satisfying. But it made it difficult to
                          see what was happening in a 9v9 fight. So we had to
                          slow everything way down.”
                        </em>
                      </span>
                    </span>
                  </p>
                </div>
                <h2
                  id="block-625f6a5a76c943288935cf96b43b2262"
                  className="notion-heading"
                >
                  <span
                    className="notion-heading__anchor"
                    id="625f6a5a76c943288935cf96b43b2262"
                  />
                  <span className="notion-semantic-string">
                    <span>11 Weeks Until Launch: The Greenlight</span>
                  </span>
                </h2>
                <div
                  id="block-9cd82ac39c7b44e19123e9d27d28ee04"
                  className="notion-image page-width"
                >
                  <picture>
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/467753c2-3d8b-42f5-9efc-cc36b8891f7e.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACBklEQVQokWNgwABMjIyYglilmBgZMUXwmcDMyMjCxAxhwAVZmZj4ODkZGBj4ODk52NgggnycnMyMjMyMjLwcHBARXg4ODjZWJiQRdGvF+fj/Tu2411DuoKAMMREu/rarPkbLwFNZ/efkVmZGRktZxUdNlapi4gvCQv9O7ZDg5ZMVEn7bVW8iLVdj6/B/dq+lrCKKPyAsaznFSE29Jkfn//tWbk9L5GRhhciqi0v8Xzq1xMIm1dD0/9bFHirqlyoK7jWU60vL/F88+f/aOQk6RgvCQv/P7tUUl3zbVf9/32p/NS20YIACET6+d10NPye3/d+6yEFBGSL4/8TmIktbLnaOLcnxf6d2qIiKqYiL/188ZWZgoIeKxv/dy9XFJZRFxU4V5TxrrVYRl/h/bb84Dx/2OGBlYpITEJjo7bU9NYGViQkiuCI6PF7HgIuFZV9WkquympqYhLuiyvLoUBkBgV5P9zQDE3lhEUd55TWx4aqiYvHa+hO9PbEYzcLCwsDA4O3tff/5k/DkJGicgwUVlJU27d17/dat2s42iHhta/PH//8nTpmybON6ZRUVBgYGPQODJVs2LV618vnHz2XNzdidz8DAICYmpqSkJCUpCXc+AwODAB+fsqKisrKyjLQ0RERSUlJdTU1WVkZdTU2ADxQagoKC6mpqigoK6mpq8nJyOC2gBQAAI4aGRDHq+psAAAAASUVORK5CYII=?w=750&f=webp"
                      media="(max-width: 546px)"
                      type="image/webp"
                    />
                    <source
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/467753c2-3d8b-42f5-9efc-cc36b8891f7e.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACBklEQVQokWNgwABMjIyYglilmBgZMUXwmcDMyMjCxAxhwAVZmZj4ODkZGBj4ODk52NgggnycnMyMjMyMjLwcHBARXg4ODjZWJiQRdGvF+fj/Tu2411DuoKAMMREu/rarPkbLwFNZ/efkVmZGRktZxUdNlapi4gvCQv9O7ZDg5ZMVEn7bVW8iLVdj6/B/dq+lrCKKPyAsaznFSE29Jkfn//tWbk9L5GRhhciqi0v8Xzq1xMIm1dD0/9bFHirqlyoK7jWU60vL/F88+f/aOQk6RgvCQv/P7tUUl3zbVf9/32p/NS20YIACET6+d10NPye3/d+6yEFBGSL4/8TmIktbLnaOLcnxf6d2qIiKqYiL/188ZWZgoIeKxv/dy9XFJZRFxU4V5TxrrVYRl/h/bb84Dx/2OGBlYpITEJjo7bU9NYGViQkiuCI6PF7HgIuFZV9WkquympqYhLuiyvLoUBkBgV5P9zQDE3lhEUd55TWx4aqiYvHa+hO9PbEYzcLCwsDA4O3tff/5k/DkJGicgwUVlJU27d17/dat2s42iHhta/PH//8nTpmybON6ZRUVBgYGPQODJVs2LV618vnHz2XNzdidz8DAICYmpqSkJCUpCXc+AwODAB+fsqKisrKyjLQ0RERSUlJdTU1WVkZdTU2ADxQagoKC6mpqigoK6mpq8nJyOC2gBQAAI4aGRDHq+psAAAAASUVORK5CYII=?w=750"
                      media="(max-width: 546px)"
                    />
                    <source
                      srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/467753c2-3d8b-42f5-9efc-cc36b8891f7e.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACBklEQVQokWNgwABMjIyYglilmBgZMUXwmcDMyMjCxAxhwAVZmZj4ODkZGBj4ODk52NgggnycnMyMjMyMjLwcHBARXg4ODjZWJiQRdGvF+fj/Tu2411DuoKAMMREu/rarPkbLwFNZ/efkVmZGRktZxUdNlapi4gvCQv9O7ZDg5ZMVEn7bVW8iLVdj6/B/dq+lrCKKPyAsaznFSE29Jkfn//tWbk9L5GRhhciqi0v8Xzq1xMIm1dD0/9bFHirqlyoK7jWU60vL/F88+f/aOQk6RgvCQv/P7tUUl3zbVf9/32p/NS20YIACET6+d10NPye3/d+6yEFBGSL4/8TmIktbLnaOLcnxf6d2qIiKqYiL/188ZWZgoIeKxv/dy9XFJZRFxU4V5TxrrVYRl/h/bb84Dx/2OGBlYpITEJjo7bU9NYGViQkiuCI6PF7HgIuFZV9WkquympqYhLuiyvLoUBkBgV5P9zQDE3lhEUd55TWx4aqiYvHa+hO9PbEYzcLCwsDA4O3tff/5k/DkJGicgwUVlJU27d17/dat2s42iHhta/PH//8nTpmybON6ZRUVBgYGPQODJVs2LV618vnHz2XNzdidz8DAICYmpqSkJCUpCXc+AwODAB+fsqKisrKyjLQ0RERSUlJdTU1WVkZdTU2ADxQagoKC6mpqigoK6mpq8nJyOC2gBQAAI4aGRDHq+psAAAAASUVORK5CYII=?w=1500&f=webp"
                      type="image/webp"
                    />
                    <img
                      src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/467753c2-3d8b-42f5-9efc-cc36b8891f7e.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAIAAADcu7ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAACBklEQVQokWNgwABMjIyYglilmBgZMUXwmcDMyMjCxAxhwAVZmZj4ODkZGBj4ODk52NgggnycnMyMjMyMjLwcHBARXg4ODjZWJiQRdGvF+fj/Tu2411DuoKAMMREu/rarPkbLwFNZ/efkVmZGRktZxUdNlapi4gvCQv9O7ZDg5ZMVEn7bVW8iLVdj6/B/dq+lrCKKPyAsaznFSE29Jkfn//tWbk9L5GRhhciqi0v8Xzq1xMIm1dD0/9bFHirqlyoK7jWU60vL/F88+f/aOQk6RgvCQv/P7tUUl3zbVf9/32p/NS20YIACET6+d10NPye3/d+6yEFBGSL4/8TmIktbLnaOLcnxf6d2qIiKqYiL/188ZWZgoIeKxv/dy9XFJZRFxU4V5TxrrVYRl/h/bb84Dx/2OGBlYpITEJjo7bU9NYGViQkiuCI6PF7HgIuFZV9WkquympqYhLuiyvLoUBkBgV5P9zQDE3lhEUd55TWx4aqiYvHa+hO9PbEYzcLCwsDA4O3tff/5k/DkJGicgwUVlJU27d17/dat2s42iHhta/PH//8nTpmybON6ZRUVBgYGPQODJVs2LV618vnHz2XNzdidz8DAICYmpqSkJCUpCXc+AwODAB+fsqKisrKyjLQ0RERSUlJdTU1WVkZdTU2ADxQagoKC6mpqigoK6mpq8nJyOC2gBQAAI4aGRDHq+psAAAAASUVORK5CYII=?w=1500"
                      alt="image"
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        display: "block",
                      }}
                      width={1500}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div
                  id="block-d9132f973dca44cda79dbf483995d1ac"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        After eight weeks of testing, optimizing, and lagging,
                        the team had a prototype. And although it wasn’t exactly
                        pretty, it was fun as f*&amp;#$.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-a8f58695b9c44513a2aaf9c1d1ebce25"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        “At the start of the entire process, we kept promising
                        that the prototype would be good,” reminisces Riot
                        Wrekz. “And then when people finally got to play it,
                        they agreed.”
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-f423650067fe4a53b71a033c52be0507"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        Which meant phase one—make a fun thing—was complete. Up
                        next? Throw out the entire prototype and actually build
                        the game in 10 weeks.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-9d1a5f59873c438ea79b29ad9aa7e343"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>
                        <em>
                          Editorial note: Be sure to check back tomorrow, 4/3,
                          at 10:00am PT for the rest of TFT’s story.
                        </em>
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  id="block-37c57b570b66431e8c86a80b1fa522d5"
                  className="notion-text"
                >
                  <p className="notion-text__content">
                    <span className="notion-semantic-string">
                      <span>Related Articles</span>
                    </span>
                  </p>
                </div>
                <ul className="notion-bulleted-list">
                  <div
                    id="block-ff88227e8df3464fa8b1ab4311fe8b85"
                    className="notion-text"
                  >
                    <p className="notion-text__content">
                      <span className="notion-semantic-string" />
                    </p>
                    <div className="notion-text__children">
                      26d79419e69f46ad9acab5ab05394198
                    </div>
                  </div>
                  <div
                    id="block-26d79419e69f46ad9acab5ab05394198"
                    className="notion-image align-start page-width"
                  >
                    <picture>
                      <source
                        srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/aed2f6f0-ee27-4acf-86b5-8d7b497ebc5b.jpg?b=data:image/png;base64,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?w=750&f=webp"
                        media="(max-width: 546px)"
                        type="image/webp"
                      />
                      <source
                        src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/aed2f6f0-ee27-4acf-86b5-8d7b497ebc5b.jpg?b=data:image/png;base64,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?w=750"
                        media="(max-width: 546px)"
                      />
                      <source
                        srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/aed2f6f0-ee27-4acf-86b5-8d7b497ebc5b.jpg?b=data:image/png;base64,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?w=1500&f=webp"
                        type="image/webp"
                      />
                      <img
                        src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/aed2f6f0-ee27-4acf-86b5-8d7b497ebc5b.jpg?b=data:image/png;base64,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?w=1500"
                        alt="image"
                        style={{
                          width: "100%",
                          maxWidth: "100%",
                          display: "block",
                        }}
                        width={1500}
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <div
                    id="block-2e611b7fd94f41b08c01ef5630f9c4db"
                    className="notion-text"
                  >
                    <p className="notion-text__content">
                      <span className="notion-semantic-string" />
                    </p>
                    <div className="notion-text__children">
                      4fbeaf7515784baeae2005e3f13ee01e
                    </div>
                  </div>
                  <div
                    id="block-4fbeaf7515784baeae2005e3f13ee01e"
                    className="notion-image align-start page-width"
                  >
                    <picture>
                      <source
                        srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/72424cbe-775a-4063-981b-d5cdda6dc1cd.jpg?b=data:image/png;base64,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?w=750&f=webp"
                        media="(max-width: 546px)"
                        type="image/webp"
                      />
                      <source
                        src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/72424cbe-775a-4063-981b-d5cdda6dc1cd.jpg?b=data:image/png;base64,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?w=750"
                        media="(max-width: 546px)"
                      />
                      <source
                        srcSet="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/72424cbe-775a-4063-981b-d5cdda6dc1cd.jpg?b=data:image/png;base64,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?w=1500&f=webp"
                        type="image/webp"
                      />
                      <img
                        src="https://super-static-assets.s3.amazonaws.com/83eec46e-d6d6-40f3-aa44-fac4fd92cf06/images/72424cbe-775a-4063-981b-d5cdda6dc1cd.jpg?b=data:image/png;base64,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?w=1500"
                        alt="image"
                        style={{
                          width: "100%",
                          maxWidth: "100%",
                          display: "block",
                        }}
                        width={1500}
                        loading="lazy"
                      />
                    </picture>
                  </div>
                </ul>
              </article>
            </div>
          </div>
        </main>
      </>
    );
}