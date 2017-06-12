get '/horses' do
  @horses = Horse.all
  erb :"/horses/index"
end

get '/horses/new' do
  @horse = Horse.new

  if request.xhr?
    erb :'horses/_add_horse', locals: {horse: @horse}, layout: false
  else
  erb :"/horses/new"
 end
end

post '/horses' do
  @horse = Horse.new(params[:horse])
  # @errors = @horse.errors.full_messages
   if request.xhr?
     if @horse.save
      erb :'horses/_details', layout: false, locals: {horse: @horse}
     else
      status 422
      "Horse didn't save, bummer!"
    end
  else
    if @horse.save
      redirect "/horses/#{@horse.id}"
    else
      erb :"/horses/new"
    end
  end
end

get '/horses/:id' do
   @horse = Horse.find(params[:id])
  if request.xhr?
    erb :"horses/_each_horse", layout: false, locals: {horse: @horse}
  else
    erb :"/horses/show"
  end
end
