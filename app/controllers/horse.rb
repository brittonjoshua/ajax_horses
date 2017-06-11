get '/horses' do
  @horses = Horse.all
  erb :"/horses/index"
end

get '/horses/new' do
  @horse = Horse.new

  if request.xhr?
    erb :'/horses/_details', layout: false
  else
  erb :"/horses/new"
 end
end

post '/horses' do
  @horse = Horse.new(params[:horse])
  if @horse.save
    if request.xhr?
      erb :'/horses/_each_horses', locals: {horse: @horse}, layout: false
    else
      redirect "/horses/#{@horse.id}"
  else
    erb :"/horses/new"
  end
end

get '/horses/:id' do
  @horse = Horse.find(params[:id])
  erb :"/horses/show"
end
