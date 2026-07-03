type ArtistAvatarProps = {
  initials: string;
  gradient: string;
  size?: "md" | "lg";
};

export default function ArtistAvatar({ initials, gradient, size = "md" }: ArtistAvatarProps) {
  const sizeClasses = size === "lg" ? "h-32 w-32 text-4xl" : "h-full w-full text-3xl";

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gradient-to-br ${gradient} font-bold text-white shadow-inner ${sizeClasses}`}
    >
      {initials}
    </div>
  );
}
