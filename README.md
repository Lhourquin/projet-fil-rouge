# projet-fil-rouge

## To create gitaction workflows

#### 1/ We add in our repo .github/worflow/test.yml

#### 2/ Add our jobs and steps then push the change to our remote repo

#### 3/ From remote repo, we can run our action, and see the result of our jobs and steps

## In order to run the jobs depending on each other, we need to add needs: [ the jobs that this job depend on ]

### After undrestanding workflow and jobs and steps, now time to work with actions:

#### 1/ We use use: link, to use git repos as source

#### 2/ We use with: to give inputs to our action

#### 3/ Our action can give back an outputs

#### Actions are some code can do some specific tastks that we can use in our steps in our github worflows

### Environment variables in workflow
