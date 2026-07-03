-- videos
CREATE TABLE videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id UUID REFERENCES auth.users,
  title TEXT,
  description TEXT,
  video_url TEXT,
  thumbnail_url TEXT,
  views INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT now()
);

-- comments
CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  video_id UUID REFERENCES videos ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users,
  text TEXT,
  parent_id UUID REFERENCES comments,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- reactions
CREATE TABLE reactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  video_id UUID REFERENCES videos ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users,
  type TEXT CHECK (type IN ('like','love','haha','wow','sad','angry')),
  created_at TIMESTAMP DEFAULT now(),
  UNIQUE(video_id, user_id)
);
