class IdeaSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :created_at, :picture
end
