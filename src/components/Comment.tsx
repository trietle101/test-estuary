// import React, { useState, useEffect } from "react";
// import { IComment } from "../types";

export default function Comment({ comment }: { comment: string }) {
  return (
    <div className="bg-gray-700 p-2 rounded-2xl">
      <p>{comment}</p>
    </div>
  );
}
