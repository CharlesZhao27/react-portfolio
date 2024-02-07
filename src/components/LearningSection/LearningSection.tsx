import SectionContainer from "../SectionContainer/SectionContainer";

const featuredTestimonial = {
  body: "I am excited to expand my tech stack by diving deeper into Golang, a language I've always been enthusiastic about learning. My goal is to explore how Go's concurrency model can enhance web application performance and to understand the real-world impact of Go projects on practical applications.",
  author: {
    name: "Go",
    handle: "golang",
    imageUrl: "src/assets/icons/avatar.svg",
    logoUrl: "src/assets/icons/golang.svg",
  },
};
const testimonials = [
  [
    [
      {
        body: "I aim to master my JavaScript skills, recognizing its status as the most frequently used language in my daily work. By deepening my expertise in UI libraries like React and exploring React frameworks, I intend to significantly increase my work efficiency and enhance my web development capabilities.",
        author: {
          name: "JavaScript",
          handle: "javaScript",
          imageUrl: "src/assets/icons/javascript.svg",
        },
      },
    ],
    [
      {
        body: "I plan to enhance my understanding of common data structures and delve deeper into specific algorithms, with a particular focus on mastering the Tree-related algorithm to improve my problem-solving and programming efficiency.",
        author: {
          name: "Algorithms",
          handle: "algorithms",
          imageUrl: "src/assets/icons/c.svg",
        },
      },
    ],
  ],
  [
    [
      {
        body: "committed to learning C# and the .NET framework to adapt to the most popular tech stack currently in Australia, aiming to stay at the forefront of technological advancements and industry standards.",
        author: {
          name: "C# && .NET",
          handle: "dotnet",
          imageUrl: "src/assets/icons/c.svg",
        },
      },
    ],
    [
      {
        body: "My learning goal for Java in 2024 is to deepen my understanding of Spring and Spring Boot development, focusing on solving more complex problems and engaging in commercial projects to enhance my expertise in real-world applications.",
        author: {
          name: "Java",
          handle: "java",
          imageUrl: "src/assets/icons/java.svg",
        },
      },
      // More testimonials...
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LearningSection() {
  return (
    <SectionContainer sectionName="continuous_learning_section">
      <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
        <div
          className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
          aria-hidden="true"
        >
          <div
            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
              Current Learning Plan
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Continuous Learning and make exiciting projects
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                <img
                  className="h-10 w-10 flex-none rounded-full bg-gray-50"
                  src={featuredTestimonial.author.imageUrl}
                  alt=""
                />
                <div className="flex-auto">
                  <div className="font-semibold">
                    {featuredTestimonial.author.name}
                  </div>
                  <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
                </div>
                <img
                  className="h-10 w-auto flex-none"
                  src={featuredTestimonial.author.logoUrl}
                  alt=""
                />
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div
                key={columnGroupIdx}
                className="space-y-8 xl:contents xl:space-y-0"
              >
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 &&
                          columnIdx === columnGroup.length - 1)
                        ? "xl:row-span-2"
                        : "xl:row-start-1",
                      "space-y-8"
                    )}
                  >
                    {column.map((testimonial) => (
                      <figure
                        key={testimonial.author.handle}
                        className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                      >
                        <blockquote className="text-gray-900">
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4">
                          <img
                            className="h-10 w-10 rounded-full bg-gray-50"
                            src={testimonial.author.imageUrl}
                            alt=""
                          />
                          <div>
                            <div className="font-semibold">
                              {testimonial.author.name}
                            </div>
                            <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
