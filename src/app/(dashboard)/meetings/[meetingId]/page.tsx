import React from "react";

interface Props {
  params: Promise<{ meetingId: string }>;
}

async function MeetingIdPage({ params }: Props) {
  const id = (await params).meetingId;
  return <div>MeetingIdPage</div>;
}

export default MeetingIdPage;
