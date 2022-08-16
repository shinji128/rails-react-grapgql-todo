class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :body
      t.integer :state

      t.timestamps
    end
  end
end
