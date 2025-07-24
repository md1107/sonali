import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Film, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExperienceItem {
  id: string;
  projectName: string;
  role: string;
  type: string;
  company?: string;
  imdbLink?: string;
  year: string;
  imageUrl?: string;
}

interface ExperienceTimelineProps {
  experiences?: ExperienceItem[];
}

const ExperienceTimeline = ({
  experiences = defaultExperiences,
}: ExperienceTimelineProps) => {
  return (
    <section className="w-full py-16 bg-black">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="relative">
          {/* Timeline center line - hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-zinc-700 hidden md:block"></div>
          {/* Mobile timeline line - left aligned */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-zinc-700 md:hidden"></div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex flex-col md:flex-row md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-orange-500 border-4 border-black z-10 hidden md:block"></div>
                {/* Mobile timeline dot */}
                <div className="absolute left-2 top-4 w-4 h-4 rounded-full bg-orange-500 border-4 border-black z-10 md:hidden"></div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                >
                  <Card className="overflow-hidden transition-all hover:shadow-lg bg-zinc-800 border-zinc-700">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                            {experience.projectName}
                          </h3>
                          <p className="text-orange-500 font-medium text-sm md:text-base">
                            {experience.role}
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className="text-xs md:text-sm border-zinc-600 text-zinc-300 self-start"
                        >
                          {experience.year}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-xs md:text-sm">
                          {experience.type.includes("Film") ? (
                            <Film className="h-3 w-3" />
                          ) : (
                            <Video className="h-3 w-3" />
                          )}
                          {experience.type}
                        </Badge>
                        {experience.company && (
                          <Badge
                            variant="secondary"
                            className="bg-zinc-700 text-zinc-300 text-xs md:text-sm"
                          >
                            {experience.company}
                          </Badge>
                        )}
                      </div>

                      {experience.imdbLink && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-xs md:text-sm"
                          onClick={() =>
                            window.open(experience.imdbLink, "_blank")
                          }
                        >
                          <ExternalLink className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                          View on IMDB
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Project Image */}
                {experience.imageUrl && (
                  <div
                    className={`w-full md:w-1/2 mt-4 md:mt-0 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={experience.imageUrl}
                        alt={`${experience.projectName} poster`}
                        className="w-full h-48 md:h-64 object-contain bg-zinc-900 transition-all duration-300 hover:scale-105"
                        loading="lazy"
                        onLoad={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.style.opacity = "1";
                        }}
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.style.opacity = "0.5";
                        }}
                        style={{ opacity: "0.7" }}
                      />
                    </div>
                  </div>
                )}

                {/* Empty space when no image - only on desktop */}
                {!experience.imageUrl && (
                  <div className="hidden md:block md:w-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const defaultExperiences: ExperienceItem[] = [
  {
    id: "1",
    projectName: "Raat Jawaan Hai",
    role: "Assistant Editor",
    type: "Web Series",
    company: "Yamini Pictures",
    imdbLink: "https://www.imdb.com/title/tt30819853/?ref_=ext_shr_lnk",
    year: "2024",
    imageUrl: "/projects/raat-jawaan-hai-compressed.png",
  },
  {
    id: "2",
    projectName: "Sam Bahadur",
    role: "Assistant Editor",
    type: "Feature Film",
    company: "RSVP Movies",
    imdbLink: "https://www.imdb.com/title/tt10786774/?ref_=ext_shr_lnk",
    year: "2023",
    imageUrl: "/projects/sam-bahadur-compressed.png",
  },
  {
    id: "3",
    projectName: "Doctor G",
    role: "Chief Assistant Editor",
    type: "Feature Film",
    company: "Junglee Pictures",
    imdbLink: "https://www.imdb.com/title/tt9054970/?ref_=ext_shr_lnk",
    year: "2022",
    imageUrl: "/projects/doctor-g-compressed.png",
  },
  {
    id: "4",
    projectName: "Good Luck Jerry",
    role: "Assistant Editor",
    type: "Feature Film",
    imdbLink: "https://www.imdb.com/title/tt13825336/?ref_=ext_shr_lnk",
    year: "2022",
    imageUrl: "/projects/good-luck-jerry-compressed.png",
  },
];

export default ExperienceTimeline;
