"use client";
import { removeBookmark } from "@/lib/actions/companion.actions";
import { addBookmark } from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SignedIn } from "@clerk/nextjs";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  bookmarked: boolean;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
  bookmarked: initialBookmarked,
}: CompanionCardProps) => {
  const pathname = usePathname();
  const [bookmarked, setBookmarked] = useState(initialBookmarked);
  const [loading, setLoading] = useState(false);

  const handleBookmark = async () => {
    if (loading) return;
    setLoading(true);
    const prev = bookmarked;
    setBookmarked(!bookmarked); // Optimistic UI update

    try {
      if (prev) {
        await removeBookmark(id, pathname);
      } else {
        await addBookmark(id, pathname);
      }
    } catch (err) {
      setBookmarked(prev); // Revert on error
      // Optionally show an error message here
    } finally {
      setLoading(false);
    }
  };
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>

        <SignedIn>
          <button
            className="companion-bookmark"
            onClick={handleBookmark}
            disabled={loading}
          >
            <Image
              src={
                bookmarked
                  ? "/icons/bookmark-filled.svg"
                  : "/icons/bookmark.svg"
              }
              alt="bookmark"
              width={12.5}
              height={15}
            />
          </button>
        </SignedIn>
      </div>

      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
        <Image
          src="/icons/clock.svg"
          alt="duration"
          width={13.5}
          height={13.5}
        />
        <p className="text-sm">{duration} minutes</p>
      </div>

      <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-primary w-full justify-center">
          Launch Lesson
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;
