import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage; } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout_page';
import NavCenter from '../components/nav_center';
import intern from '../images/intern.jpeg';

export default function GuideToApplyingInternship() {
  return (
    <LayoutPage>
      <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <NavCenter />
      </div>

      <div className="relative overflow-hidden bg-white py-16">
        <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
          <div className="relative mx-auto h-full max-w-prose text-lg">
            <svg
              className="absolute top-12 left-full translate-x-32 transform"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    className="text-gray-200"
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    className="text-gray-200"
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full translate-x-32 transform"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    className="text-gray-200"
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-6 max-w-prose text-lg">
            <p className="text-center text-base font-semibold uppercase leading-6 tracking-wide text-indigo-600">
              Practical Guide To
            </p>
            <h1 className="mt-2 mb-8 text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Applying For Software Developer Internship Program At Stuntcoders
            </h1>
            <p className="text-xl leading-8 text-gray-500">
              StuntCoders has established its internship program in 2016. We are
              probably doing something good as we have been seeing more and more
              people applying for it. That is why we decided to sum up all
              frequently asked questions and spruce things up with some tips you
              will surely find useful if you decide to apply.
            </p>
          </div>
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <StaticImage
                className="h-56 w-full object-cover lg:absolute lg:h-full"
                src={intern}
                alt="Intern applied"
                loading="auto"
              />
            </div>
          </div>
          <div className="prose prose-lg mx-auto text-gray-500">
            <h2>Is it for me?</h2>
            <p>
              If you are a recent graduate (3+ university program) and haven’t
              done any personal projects, this program might be the right thing
              for you.
            </p>
            <p>
              You should apply if you have just gained a degree (3+ university
              program) and have done some projects (personal, small, more
              significant). Then we will figure out together if you are for a
              junior position or go through an internship program.
            </p>
            <p>We are always eager to meet people like you.</p>
            <p>
              If you have completed the course in PHP, Ruby, or front-end
              development, you must have at least one project that you are proud
              of. Make it publicly available via Git repo. We want to know how
              you think, how persistent you are, how much time it took you to
              complete the project.
            </p>
            <p>
              You should additionally write a motivational letter or (even
              better) record yourself explaining the motivation behind your
              choices and what you think your future will look like if all turns
              great.
            </p>
            <p>How to Apply?</p>
            <p>
              There are many tutorials on writing or recording a great
              motivational letter.
            </p>
            <p>
              That is why we will not cover this topic, but we should point out
              that this seemingly small step may affect your entire career, and
              as such, it deserves your full attention and dedication.
            </p>
            <p>
              Naturally, when reading motivational letters, we go for those
              written on a more personal note, those that genuinely explain your
              motives and expectations related to StuntCoders in particular,
              rather than going for a generic-sent-out-to-hundred-companies
              letter.
            </p>
            <p>
              So, try to explain why exactly you believe we would be like two
              peas in a pod!
            </p>
            <p>
              We also want to know the reason behind your decision to pursue
              this career.
            </p>
            <p>
              We want to know if things keep you awake at night. Tell us as much
              as you can about yourself and the technologies that turn you on.
              Tell us about what problems you would like to solve.
            </p>
            <p>What does the interview look like?</p>
            <p>
              We reply to all people that apply. If you do not hear from us,
              likely, we didn’t receive your application. Try reaching us
              differently.
            </p>
            <p>
              If we like your motivational letter and your project(s), we will
              invite you to our office or an online interview so we can meet.
            </p>
            <p>
              There, we will be looking forward to learning more about you, and
              we will be open to any questions you might have. Our teammates
              (not more than two) will be talking to you about motivation, your
              current interests, and the knowledge that you have gained.
            </p>
            <p>
              Our questions will depend on your area of interest and current
              knowledge.
            </p>
            <p>
              The idea here is to learn how much time the internship should take
              and what areas we should focus on during that time. Strong
              individuals form strong teams, and we want you to gain as much as
              possible from this program.
            </p>
            <p>
              If all turns out to be great on both sides, we will ask you to
              visit our team psychologist for evaluation. Our standard procedure
              ensures you will be a great fit for the current team.
            </p>
            <h2>FAQ</h2>
            <h3>Is the internship paid?</h3>
            <p>Yes.</p>
            <h3>How long does the internship last?</h3>
            <p>
              It can take anywhere between three and six months depending on
              your current knowledge.
            </p>
            <h3>Do interns get a chance to work on real-life projects?</h3>
            <p>Yes!</p>
            <p>
              And not only that, but we push you beyond your comfort zone by
              giving you challenging problems to solve as well. Of course, you
              are monitored at all times, and you have a mentor by your side
              supporting you and assuring you are on the right track.
            </p>
            <h3>Will I be learning a lot?</h3>
            <p>
              Yes, we will encourage you to broaden your skills by recommending
              great books and providing you with unique tools and courses.
            </p>
            <h3>What sources do you apply during the program?</h3>
            <p>
              In short, video tutorials, mentor monitored development,
              face-to-face discussions, and book reading.
            </p>
            <h3>Do StuntCoders provide everything?</h3>
            <p>
              Yes. Computer equipment, ergonomic chairs, online courses,
              licenses, books…
            </p>
            <h3>Which books will I have to read?</h3>
            <p>We recommend the following:</p>
            <ul>
              <li>Pragmatic Programmer, book by Andy Hunt and Dave Thomas.</li>
              <li>Clean Code, book by Robert Cecil Martin</li>
              <li>Refactoring, book by Kent Beck and Martin Fowler</li>
            </ul>
            <h3>What will I learn?</h3>
            <p>
              This depends on you and your general area of interest, but some
              general areas are:
            </p>
            <ul>
              <li>Software development methodologies in practice</li>
              <li>Usage of project management tools and lifecycle of tasks</li>
              <li>Proper and advanced use of Git</li>
              <li>Tracking of changes and adequate methods for versioning</li>
              <li>Continuous integration tools and methods</li>
              <li>Code quality</li>
              <li>Peer reviewing</li>
              <li>Refactoring</li>
            </ul>
            <p>You will also learn about:</p>
            <ul>
              <li>WordPress</li>
              <li>Magento</li>
              <li>Ruby on Rails</li>
              <li>Linux</li>
            </ul>
            <h3>Do you hire your interns?</h3>
            <p>
              More often than not, we hire software developers that went through
              our program.
            </p>
            <h3>How many interns do you accept to your program?</h3>
            <p>
              One of our mantras is – that we are not willing to commit to more
              than we are sure we can handle.
            </p>
            <p>
              This is our approach with our clients and projects and with
              interns, and we consider it tremendously important.
            </p>
            <p>
              After all, it is the only way to ensure that the result will be of
              the highest quality.
            </p>
            <p>
              Therefore, we will give you a straight and honest answer if we can
              or can not accept you onto our internship program.
            </p>
            <p className="mt-10">
              We look forward to hearing from you. Good luck!
            </p>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
