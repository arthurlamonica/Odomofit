import React, { useState } from 'react';
import { Heart, MessageSquare, Bookmark, Share2, Send, Dumbbell, Check } from 'lucide-react';
import { INITIAL_SOCIAL_POSTS } from '../data/mockData';
import type { SocialPost } from '../types';

export const CommunityFeed: React.FC = () => {
  const [posts, setPosts] = useState<SocialPost[]>(INITIAL_SOCIAL_POSTS);
  const [activeCommentPostId, setActiveCommentPostId] = useState<string | null>('post-1');
  const [newCommentText, setNewCommentText] = useState<{ [key: string]: string }>({});
  const [shareToast, setShareToast] = useState(false);

  const handleLike = (id: string) => {
    setPosts(prev =>
      prev.map(post => {
        if (post.id === id) {
          const isLiked = post.userLiked;
          return {
            ...post,
            userLiked: !isLiked,
            likes: isLiked ? post.likes - 1 : post.likes + 1,
          };
        }
        return post;
      })
    );
  };

  const handleSave = (id: string) => {
    setPosts(prev =>
      prev.map(post => (post.id === id ? { ...post, saved: !post.saved } : post))
    );
  };

  const handleAddComment = (postId: string) => {
    const text = newCommentText[postId]?.trim();
    if (!text) return;

    setPosts(prev =>
      prev.map(post => {
        if (post.id === postId) {
          const newComment = {
            id: `user-comment-${Date.now()}`,
            author: 'Você (Visitante)',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
            text: text,
            timestamp: 'Agora mesmo'
          };
          return {
            ...post,
            commentsCount: post.commentsCount + 1,
            commentsList: [newComment, ...post.commentsList]
          };
        }
        return post;
      })
    );

    setNewCommentText(prev => ({ ...prev, [postId]: '' }));
  };

  const triggerShare = () => {
    setShareToast(true);
    setTimeout(() => setShareToast(false), 3000);
  };

  return (
    <section id="comunidade" className="py-24 bg-[#080B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F2224] border border-[#2D3236]">
            <span className="text-xs font-semibold text-[#C6FF00] uppercase tracking-wider">
              Feed Social Fitness
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Treinar é individual.{' '}
            <span className="text-[#C6FF00]">Evoluir pode ser coletivo.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A7A7A7] leading-relaxed">
            Compartilhe sua jornada, acompanhe outros atletas, celebre conquistas e encontre motivação 
            em pessoas que também estão trabalhando pela sua melhor versão.
          </p>
        </div>

        {/* Share notification toast */}
        {shareToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#1F2224] border border-[#C6FF00] text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce">
            <Check className="w-5 h-5 text-[#C6FF00]" />
            <span className="text-sm font-semibold">Link do treino copiado para o clipboard!</span>
          </div>
        )}

        {/* Feed Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const isCommentsOpen = activeCommentPostId === post.id;

            return (
              <div
                key={post.id}
                className="bg-[#1F2224] rounded-2xl border border-[#2D3236] overflow-hidden flex flex-col justify-between shadow-xl hover:border-[#2D3236] transition-all"
              >
                {/* Post Top Bar: User Info */}
                <div>
                  <div className="p-4 flex items-center justify-between border-b border-[#2D3236]/60">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src={post.authorAvatar}
                          alt={post.authorName}
                          className="w-11 h-11 rounded-full object-cover border-2 border-[#C6FF00]"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#080B0B] border border-[#C6FF00] flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-[#C6FF00] stroke-[3]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-bold text-white leading-tight">{post.authorName}</h3>
                          <span className="text-[10px] font-semibold text-[#C6FF00] bg-[#C6FF00]/10 px-1.5 py-0.5 rounded">
                            {post.roleTag}
                          </span>
                        </div>
                        <div className="text-xs text-[#A7A7A7] flex items-center gap-1 mt-0.5">
                          <Dumbbell className="w-3 h-3 text-[#A7A7A7]" />
                          <span>{post.workoutType}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-[#A7A7A7]">{post.timestamp}</span>
                  </div>

                  {/* Post Image with Badge */}
                  <div className="relative aspect-square bg-[#080B0B] overflow-hidden group">
                    <img
                      src={post.image}
                      alt={post.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B0B]/70 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Floating workout summary pill */}
                    {post.workoutStats && (
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-xl bg-[#080B0B]/85 backdrop-blur-md border border-[#2D3236]">
                        <div className="flex items-center gap-3 text-xs">
                          <div>
                            <span className="text-[10px] text-[#A7A7A7] block">Volume</span>
                            <span className="font-bold text-white">{post.workoutStats.volumeTotal}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-[#A7A7A7] block">Tempo</span>
                            <span className="font-bold text-white">{post.workoutStats.duration}</span>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-[#080B0B] bg-[#C6FF00] px-2.5 py-1 rounded-md shadow-sm">
                          {post.workoutStats.prRecord}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Post Actions (Likes, Comments, Save, Share) */}
                  <div className="p-4 pb-2 flex items-center justify-between border-b border-[#2D3236]/40">
                    <div className="flex items-center gap-4">
                      {/* Like button */}
                      <button
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          post.userLiked ? 'text-[#C6FF00] scale-105' : 'text-[#A7A7A7] hover:text-white'
                        }`}
                        title="Curtir publicação"
                      >
                        <Heart className={`w-5 h-5 ${post.userLiked ? 'fill-current text-[#C6FF00]' : ''}`} />
                        <span>{post.likes}</span>
                      </button>

                      {/* Comment toggle button */}
                      <button
                        onClick={() => setActiveCommentPostId(isCommentsOpen ? null : post.id)}
                        className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                          isCommentsOpen ? 'text-[#C6FF00]' : 'text-[#A7A7A7] hover:text-white'
                        }`}
                        title="Ver comentários"
                      >
                        <MessageSquare className="w-5 h-5" />
                        <span>{post.commentsCount}</span>
                      </button>

                      {/* Share button */}
                      <button
                        onClick={triggerShare}
                        className="text-[#A7A7A7] hover:text-white transition-colors cursor-pointer"
                        title="Compartilhar"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Bookmark / Save */}
                    <button
                      onClick={() => handleSave(post.id)}
                      className={`transition-colors cursor-pointer ${
                        post.saved ? 'text-[#C6FF00]' : 'text-[#A7A7A7] hover:text-white'
                      }`}
                      title={post.saved ? 'Salvo' : 'Salvar publicação'}
                    >
                      <Bookmark className={`w-5 h-5 ${post.saved ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Caption */}
                  <div className="p-4 pt-3">
                    <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                      <span className="font-bold text-white mr-1.5">{post.authorName}</span>
                      {post.caption}
                    </p>
                  </div>
                </div>

                {/* Comments Box (Expandable / Interactive) */}
                <div className="p-4 pt-0">
                  {isCommentsOpen && (
                    <div className="mt-2 pt-3 border-t border-[#2D3236] space-y-3">
                      <div className="text-xs font-semibold text-[#A7A7A7]">Comentários ({post.commentsList.length}):</div>
                      
                      {/* Comment items */}
                      <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
                        {post.commentsList.map((c) => (
                          <div key={c.id} className="p-2 rounded-lg bg-[#080B0B] border border-[#2D3236]/60 text-xs">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-bold text-white">{c.author}</span>
                              <span className="text-[10px] text-[#A7A7A7]">{c.timestamp}</span>
                            </div>
                            <p className="text-gray-300">{c.text}</p>
                          </div>
                        ))}
                      </div>

                      {/* Comment Input */}
                      <div className="flex items-center gap-2 pt-1">
                        <input
                          type="text"
                          value={newCommentText[post.id] || ''}
                          onChange={(e) => setNewCommentText({ ...newCommentText, [post.id]: e.target.value })}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleAddComment(post.id);
                          }}
                          placeholder="Adicione um comentário..."
                          className="flex-1 px-3 py-2 text-xs rounded-lg bg-[#080B0B] border border-[#2D3236] text-white focus:outline-none focus:border-[#C6FF00]"
                        />
                        <button
                          onClick={() => handleAddComment(post.id)}
                          className="p-2 rounded-lg bg-[#C6FF00] text-[#080B0B] hover:bg-[#b5eb00] transition-colors"
                          title="Enviar comentário"
                        >
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {!isCommentsOpen && post.commentsList.length > 0 && (
                    <button
                      onClick={() => setActiveCommentPostId(post.id)}
                      className="text-xs text-[#A7A7A7] hover:text-[#C6FF00] transition-colors mt-1 block"
                    >
                      Ver todos os {post.commentsList.length} comentários...
                    </button>
                  )}

                  <div className="mt-3 pt-2 text-[10px] text-[#A7A7A7] flex items-center justify-between border-t border-[#2D3236]/40">
                    <span>Interação em demonstração local</span>
                    <span className="text-[#C6FF00]">Sincronização Cloud em breve</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
