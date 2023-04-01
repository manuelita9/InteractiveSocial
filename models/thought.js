const thoughtSchema = new Schema(
  {
    thoughttext: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
      
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => {
        // Format the timestamp in the format "YYYY-MM-DD HH:mm:ss"
        return timestamp.toLocaleString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
      }
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reaction',
      },
    ],
  },
  {
    toJSON: { getters: true },
    id: false,
  }
);



const Thought = model('Thought', thoughtSchema);