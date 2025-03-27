const mongoose = require('mongoose');

const UserJourneySchema = new mongoose.Schema(
  {
    email: { type: mongoose.Schema.Types.Mixed, required: true },
    urlSlug: { type: mongoose.Schema.Types.Mixed, required: true },
    agreement: { type: mongoose.Schema.Types.Mixed },
    catPrimaryCategory: { type: mongoose.Schema.Types.Mixed },
    catPrimarySubCategory: { type: mongoose.Schema.Types.Mixed },
    catCategory: { type: mongoose.Schema.Types.Mixed },
    catSubCategory: { type: mongoose.Schema.Types.Mixed },
    catLocation: { type: mongoose.Schema.Types.Mixed },
    catTitle: { type: mongoose.Schema.Types.Mixed },
    catSubtitle: { type: mongoose.Schema.Types.Mixed },
    catVideo: { type: mongoose.Schema.Types.Mixed },
    catStartUpBeginDate: { type: mongoose.Schema.Types.Mixed },
    catStartUpLaunchDate: { type: mongoose.Schema.Types.Mixed },
    journeyTitleBlocks: { type: mongoose.Schema.Types.Mixed },
    journeyImages: { type: mongoose.Schema.Types.Mixed },
    journeyVideos: { type: mongoose.Schema.Types.Mixed },
    journeyWebVideos: { type: mongoose.Schema.Types.Mixed },
    journeyTitles: { type: mongoose.Schema.Types.Mixed },
    journeyContents: { type: mongoose.Schema.Types.Mixed },
    teamOwnerRequest: { type: mongoose.Schema.Types.Mixed },
    teamPrimaryCategory: { type: mongoose.Schema.Types.Mixed },
    teamPrimaryRoles: { type: mongoose.Schema.Types.Mixed },
    teamTitle: { type: mongoose.Schema.Types.Mixed },
    teamSubTitle: { type: mongoose.Schema.Types.Mixed },
    faqData: { type: mongoose.Schema.Types.Mixed }, 
  },
  { 
    timestamps: true 
  }
);

module.exports = mongoose.model('UserJourney', UserJourneySchema);
