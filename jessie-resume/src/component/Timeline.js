import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

function StudyTimeline() {
  const theme = useTheme();

  const StudyItem = ({ dotColor, content, type, year, school, remark }) => {
    return (
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          {year}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: dotColor }} />
          {type !== "end" && <TimelineConnector sx={{ height: 70 }} />}
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body1">{content}</Typography>
          <Typography variant="body2">{remark}</Typography>
          <Typography variant="body3">{school}</Typography>
        </TimelineContent>
      </TimelineItem>
    );
  };

  return (
    <Box>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.1,
          },
        }}
      >
        <StudyItem
          year="2023"
          content="MSc in Geomatic (Geographic Information System) with Distinction"
          school="Hong Kong Polytechnic University"
          dotColor={theme.palette.primary.main}
        />
        <StudyItem
          year="2019"
          content="BSc in Quantitative Social Analysis"
          school="Hong Kong University of Science and Technology"
          remark="Minor in Mathematics & Minor in China Studies"
          dotColor={theme.palette.primary.main}
          type="end"
        />
      </Timeline>
    </Box>
  );
}

export default StudyTimeline;
