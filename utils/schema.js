import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockInterview = pgTable('mockInterview', {
    id: serial('id').primaryKey(),
    jsonMockResp: text('jsonMockResp').notNull(),
    jobPosition: varchar('jobPosition', { length: 255 }),
    jobDesc: varchar('jobDesc', { length: 255 }),
    jobExperience: varchar('jobExperience', { length: 255 }),
    createdBy: varchar('createdBy', { length: 255 }).notNull(),
    createdAt: varchar('createdAt', { length: 255 }).notNull(),
    mockId: varchar('mockId', { length: 255 }).notNull()
});

export const UserAnswer=pgTable('userAnswer',{
    id: serial('id').primaryKey(),
    mockIdRef:varchar('mockIdRef'),
    question:varchar('question',{length:255}),
    correctAns:text('correctAns'),
    userAns:text('userAns'),
    feeedback:text('feedback'),
    rating:varchar('rating'),
    userEmail:varchar('userEmail'),
    createdAt:varchar('createdAt', { length: 255 }),

});