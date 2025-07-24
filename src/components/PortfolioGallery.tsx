import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import VideoPlayer from "./VideoPlayer";
import { Play } from "lucide-react";

interface VideoProject {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  category: string;
  tags?: string[];
}

interface PortfolioGalleryProps {
  projects?: VideoProject[];
}

const longFormatProjects: VideoProject[] = [
  {
    id: "lf1",
    title: "Long Format Video 1",
    description: "Professional long format video content",
    thumbnailUrl: "https://img.youtube.com/vi/-sctHvppel4/mqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=-sctHvppel4",
    category: "Long Format",
    tags: ["Professional", "Long Form"],
  },
  {
    id: "lf2",
    title: "Long Format Video 2",
    description: "Professional long format video content",
    thumbnailUrl: "https://img.youtube.com/vi/lC8VAIAYX9Y/mqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=lC8VAIAYX9Y&t=22s",
    category: "Long Format",
    tags: ["Professional", "Long Form"],
  },
  {
    id: "lf3",
    title: "Long Format Video 3",
    description: "Professional long format video content",
    thumbnailUrl: "https://img.youtube.com/vi/Mf43MkmBZrI/mqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=Mf43MkmBZrI",
    category: "Long Format",
    tags: ["Professional", "Long Form"],
  },
  {
    id: "lf4",
    title: "Long Format Video 4",
    description: "Professional long format video content",
    thumbnailUrl: "https://img.youtube.com/vi/X1B05Dpfbkw/mqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=X1B05Dpfbkw",
    category: "Long Format",
    tags: ["Professional", "Long Form"],
  },
  {
    id: "lf5",
    title: "Long Format Video 5",
    description: "Professional long format video content",
    thumbnailUrl: "https://img.youtube.com/vi/QQybLcBMoFc/mqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=QQybLcBMoFc",
    category: "Long Format",
    tags: ["Professional", "Long Form"],
  },
  {
    id: "lf6",
    title: "Long Format Video 6",
    description: "Professional long format video content",
    thumbnailUrl: "https://img.youtube.com/vi/w3f32r00wus/mqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=w3f32r00wus",
    category: "Long Format",
    tags: ["Professional", "Long Form"],
  },
];

const shortFormatProjects: VideoProject[] = [
  {
    id: "sf1",
    title: "Short Format Reel 1",
    description: "Creative short format content",
    thumbnailUrl: "/reels/reel-1.png",
    videoUrl:
      "https://www.instagram.com/reel/CX03WSDKvxK/?igsh=MW5tbWJwdms2eDRueg==",
    category: "Short Format",
    tags: ["Instagram", "Short Form"],
  },
  {
    id: "sf2",
    title: "Short Format Reel 2",
    description: "Creative short format content",
    thumbnailUrl: "/reels/reel-2.png",
    videoUrl:
      "https://www.instagram.com/reel/CZ6xgkfgsy3/?igsh=eXM2YjMxcGQ0bndv",
    category: "Short Format",
    tags: ["Instagram", "Short Form"],
  },
  {
    id: "sf3",
    title: "Short Format Reel 3",
    description: "Creative short format content",
    thumbnailUrl: "/reels/reel-3.png",
    videoUrl:
      "https://www.instagram.com/reel/CZ1Z42-gvDz/?igsh=NXByNW53NDQ0Nzd2",
    category: "Short Format",
    tags: ["Instagram", "Short Form"],
  },
  {
    id: "sf4",
    title: "Short Format Reel 4",
    description: "Creative short format content",
    thumbnailUrl: "/reels/reel-4.png",
    videoUrl:
      "https://www.instagram.com/reel/CZzQDSrgoxi/?igsh=MXdiZmZmamp3amR1dw==",
    category: "Short Format",
    tags: ["Instagram", "Short Form"],
  },
  {
    id: "sf5",
    title: "Short Format Reel 5",
    description: "Creative short format content",
    thumbnailUrl: "/reels/reel-5.png",
    videoUrl:
      "https://www.instagram.com/reel/CWS-DdUAgs1/?igsh=MWB3M2UzcGx6cXk5MA==",
    category: "Short Format",
    tags: ["Instagram", "Short Form"],
  },
  {
    id: "sf6",
    title: "Short Format Reel 6",
    description: "Creative short format content",
    thumbnailUrl: "/reels/reel-6.png",
    videoUrl:
      "https://www.instagram.com/reel/CU9ogYig6hA/?igsh=djRkZWQxbTd3MDNz",
    category: "Short Format",
    tags: ["Instagram", "Short Form"],
  },
  {
    id: "sf7",
    title: "Short Format Post 7",
    description: "Creative short format content",
    thumbnailUrl: "/reels/reel-7.png",
    videoUrl: "https://www.instagram.com/p/CLWoLRoJalp/?igsh=X21SWkhfdzBK",
    category: "Short Format",
    tags: ["Instagram", "Short Form"],
  },
  {
    id: "sf8",
    title: "Short Format IGTV 8",
    description: "Creative short format content",
    thumbnailUrl: "/reels/reel-8.png",
    videoUrl:
      "https://www.instagram.com/reel/CR3M4ilg2A1/?igsh=MTduYzduaWdrdzJyeg%3D",
    category: "Short Format",
    tags: ["Instagram", "Short Form"],
  },
];

const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  projects = [...longFormatProjects, ...shortFormatProjects],
}) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const categories = ["Long Format", "Short Format"];

  const handleVideoSelect = (project: VideoProject) => {
    setSelectedVideo(project);
    setIsDialogOpen(true);
  };

  const handleVideoClick = (project: VideoProject) => {
    if (project.videoUrl.includes("instagram.com")) {
      // Open Instagram links in new tab
      window.open(project.videoUrl, "_blank");
    } else {
      // Open YouTube links in new tab for long format videos
      window.open(project.videoUrl, "_blank");
    }
  };

  return (
    <div
      className="w-full bg-background py-16 px-4 md:px-8 lg:px-12"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my work across various platforms and genres,
            showcasing my editing style and storytelling approach, which has
            garnered millions of views.
          </p>
        </div>

        <Tabs defaultValue="Long Format" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-background border border-border">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-4 py-2 text-sm md:text-base"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="Long Format" className="mt-0">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Long Format Videos</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Professional long-form content showcasing detailed storytelling
                and cinematic editing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {longFormatProjects.map((project) => (
                <Dialog
                  key={project.id}
                  open={isDialogOpen && selectedVideo?.id === project.id}
                  onOpenChange={(open) => !open && setIsDialogOpen(false)}
                >
                  <DialogTrigger asChild>
                    <Card
                      className="overflow-hidden cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 bg-card border border-border group"
                      onClick={() => handleVideoClick(project)}
                    >
                      <div className="relative">
                        <AspectRatio ratio={16 / 9}>
                          <img
                            src={project.thumbnailUrl}
                            alt={project.title}
                            className="object-cover w-full h-full"
                          />
                        </AspectRatio>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                          <div className="rounded-full bg-white/90 backdrop-blur-sm p-4 shadow-lg">
                            <Play className="h-10 w-10 text-black fill-black" />
                          </div>
                        </div>
                        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          YouTube
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags?.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full p-0 bg-background">
                    {selectedVideo && selectedVideo.id === project.id && (
                      <VideoPlayer
                        videoUrl={selectedVideo.videoUrl}
                        title={selectedVideo.title}
                        description={selectedVideo.description}
                      />
                    )}
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="Short Format" className="mt-0">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Short Format Videos
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Creative short-form content optimized for social media platforms
                and quick engagement.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {shortFormatProjects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 bg-zinc-900 border border-zinc-700 group"
                  onClick={() => handleVideoClick(project)}
                >
                  <div className="relative">
                    <AspectRatio ratio={9 / 16}>
                      <div className="w-full h-full bg-gradient-to-br from-zinc-800 via-zinc-900 to-black flex items-center justify-center relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-4 left-4 w-8 h-8 border-2 border-orange-500 rounded-full"></div>
                          <div className="absolute top-12 right-6 w-4 h-4 bg-orange-500 rounded-full"></div>
                          <div className="absolute bottom-8 left-6 w-6 h-6 border border-orange-500 rotate-45"></div>
                          <div className="absolute bottom-4 right-4 w-3 h-3 bg-orange-500"></div>
                        </div>

                        {/* Play Button */}
                        <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
                          <div className="rounded-full bg-orange-500/20 backdrop-blur-sm p-6 shadow-lg mb-4 group-hover:bg-orange-500/30 transition-all duration-300">
                            <Play className="h-12 w-12 text-orange-500 fill-orange-500" />
                          </div>
                          <div className="text-white text-sm font-medium mb-1">
                            Instagram Reel
                          </div>
                          <div className="text-zinc-400 text-xs">
                            Tap to View
                          </div>
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </div>
                    </AspectRatio>
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-2 py-1 rounded font-medium">
                      Instagram
                    </div>
                  </div>
                  <CardContent className="p-4 bg-zinc-900">
                    <h3 className="font-semibold text-lg mb-1 text-white">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags?.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs bg-zinc-800 text-zinc-300 border-zinc-700"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">60+</span> videos
              edited across platforms
            </p>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Click on any video thumbnail to watch or visit the original post
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGallery;
